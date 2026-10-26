// Builds the one JSON-LD @graph for an inner page from its content file and its registry entry.
import type { PageContent, Section, FaqItem, ImageRef } from './types';
import type { PageMeta } from './pages';
import { crumbsFor } from './pages';
import { getReview, quoteFor } from './reviews';
import { breadcrumbNode, faqNode, serviceNode, reviewNode, physiotherapyNode, personNode, itemListNode, webPageNode, imageRefNode, describedImageNode, abs, CLINIC_ID, CLINIC_REF, PERSON_ID } from './schema';
import { BUSINESS } from '../data/site';
import { POSTS } from './posts';

type Node = Record<string, unknown>;

export function faqsOf(sections: Section[]): FaqItem[] {
  return sections.flatMap((s) => (s.kind === 'faq' ? s.items : []));
}

export function reviewsOf(sections: Section[]): Node[] {
  // Every review shown on the page, in page order: the one review block, the video's review, the groups.
  const refs = sections.flatMap((s) =>
    s.kind === 'review' || s.kind === 'video' ? [s.review] : s.kind === 'reviews' ? s.groups.flatMap((g) => g.items) : [],
  );
  return refs.map((ref) => reviewNode(getReview(ref.key).displayName, quoteFor(ref)));
}


// A licensed stock picture as an ImageObject (25 Oct 2026: the condition illustrations Dr. Edward chose). Credit, license
// page and terms come from the content file, exactly as the Adobe Stock asset and the file's own metadata give them;
// creator only when the file names one. Never Chatsworth PT or Boost as author or copyright holder.
function stockImageNode(img: ImageRef, id: string, aboutId: string): Node {
  const s = img.stock!;
  const px = (value: number) => ({ '@type': 'QuantitativeValue', value, unitCode: 'E37' });
  const type = ({ webp: 'image/webp', jpg: 'image/jpeg', jpeg: 'image/jpeg', png: 'image/png' } as Record<string, string>)[img.src.split('.').pop() ?? ''];
  return {
    '@type': 'ImageObject',
    '@id': id,
    contentUrl: abs(img.src),
    url: abs(img.src),
    name: s.title,
    description: s.description,
    width: px(img.width),
    height: px(img.height),
    ...(type ? { encodingFormat: type } : {}),
    creditText: s.creditText,
    ...(s.creator ? { creator: { '@type': 'Person', name: s.creator } } : {}),
    acquireLicensePage: s.acquireLicensePage,
    license: s.license,
    about: { '@id': aboutId },
  };
}

export function graphFor(page: PageContent, meta: PageMeta, extra: Node[] = []): Node[] {
  const nodes: Node[] = [];
  const faqs = faqsOf(page.sections);
  // 24 Oct 2026: no Review markup. Google's review-snippet rules make a business's reviews on its own site ineligible
  // for review stars (LocalBusiness, self-serving), and its test flagged the marked-up reviews as invalid ("Multiple
  // reviews without aggregateRating object"). An aggregate copied from Google would break the rule against aggregating
  // ratings from other websites. The reviews stay visible on the pages; reviewsOf() is kept for reference.
  const reviews: Node[] = [];
  const crumbs = crumbsFor(meta);
  switch (meta.type) {
    case 'service':
      nodes.push(serviceNode({ name: page.schema?.serviceType ?? meta.full, path: meta.path, description: page.schema?.serviceDescription, reviews }));
      break;
    case 'city':
      nodes.push(serviceNode({ name: page.schema?.serviceType ?? 'Physical therapy', path: meta.path, description: page.schema?.serviceDescription, areaServed: page.schema?.areaServed ?? (meta.city ? [meta.city] : undefined), reviews }));
      break;
    case 'condition': {
      const c = page.schema?.condition;
      const conditionId = `${abs(meta.path)}#condition`;
      const hero = page.hero.image;
      const heroImage = hero?.stock ? stockImageNode(hero, `${abs(meta.path)}#hero-image`, conditionId) : null;
      nodes.push({
        '@type': 'MedicalCondition',
        '@id': conditionId,
        name: c?.name ?? meta.name,
        url: abs(meta.path),
        ...(c?.alternateName?.length ? { alternateName: c.alternateName } : {}),
        ...(c?.associatedAnatomy ? { associatedAnatomy: { '@type': 'AnatomicalStructure', name: c.associatedAnatomy } } : {}),
        possibleTreatment: {
          '@type': 'MedicalTherapy',
          name: c?.possibleTreatment ?? 'Physical therapy',
          ...(c?.parentServicePath ? { url: abs(c.parentServicePath) } : {}),
        },
        ...(heroImage ? { image: { '@id': heroImage['@id'] } } : {}),
      });
      if (heroImage) nodes.push(heroImage);
      reviews.forEach((r) => nodes.push({ ...r, itemReviewed: CLINIC_REF }));
      break;
    }
    case 'about':
      nodes.push(personNode());
      reviews.forEach((r) => nodes.push({ ...r, itemReviewed: { '@id': PERSON_ID, name: BUSINESS.doctor.display } }));
      break;
    case 'contact':
      nodes.push(physiotherapyNode(reviews));
      break;
    default:
      reviews.forEach((r) => nodes.push({ ...r, itemReviewed: CLINIC_REF }));
  }
  const listId = `${abs(meta.path)}#list`;
  let hasList = false;
  // The blog hub's ItemList is every post, newest first (its page node below is a CollectionPage).
  if (meta.type === 'blog-hub' && POSTS.length) {
    nodes.push(itemListNode('Blog posts', POSTS.map((p) => ({ name: p.h1, path: p.path })), listId));
    hasList = true;
  }
  // Hubs list their children: an ItemList built from the cards on the page, in page order.
  if (meta.type.endsWith('-hub') && meta.type !== 'blog-hub') {
    const cards = page.sections.flatMap((s) => (s.kind === 'cards' ? [...(s.cards ?? []), ...(s.groups ?? []).flatMap((g) => g.cards)] : []));
    if (cards.length) {
      nodes.push(itemListNode(meta.full, cards.map((c) => ({ name: c.title, path: c.href })), listId));
      hasList = true;
    }
  }
  if (faqs.length) nodes.push(faqNode(faqs));
  nodes.push(...extra);
  const breadcrumb = breadcrumbNode(crumbs);
  nodes.push(breadcrumb);
  // 25 Oct 2026: the page itself, tied to the WebSite, its breadcrumb, its main entity and its lead image.
  const mainId =
    meta.type === 'about' ? PERSON_ID
    : meta.type === 'contact' ? CLINIC_ID
    : meta.type === 'condition' ? `${abs(meta.path)}#condition`
    : meta.type === 'service' || meta.type === 'city' ? `${abs(meta.path)}#service`
    : hasList ? listId
    : null;
  const pageType = meta.type === 'about' ? 'AboutPage' : meta.type === 'contact' ? 'ContactPage' : meta.type === 'blog-hub' ? 'CollectionPage' : 'WebPage';
  const hero = page.hero.image;
  // A hero with a recorded title gets its own ImageObject (25 Oct 2026); other heroes keep the small inline one.
  const heroId = `${abs(meta.path)}#hero-image`;
  const described = hero && !hero.stock && hero.title ? describedImageNode(hero, heroId) : null;
  if (described) nodes.push(described);
  const primaryImage = hero ? (hero.stock || described ? { '@id': heroId } : imageRefNode(hero)) : null;
  nodes.unshift(
    webPageNode(meta.path, page.title, pageType, {
      description: page.description,
      breadcrumb: { '@id': breadcrumb['@id'] },
      ...(mainId ? { mainEntity: { '@id': mainId } } : {}),
      ...(primaryImage ? { primaryImageOfPage: primaryImage } : {}),
    }),
  );
  return nodes;
}

export { itemListNode, abs };
