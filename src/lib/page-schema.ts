// Builds the one JSON-LD @graph for an inner page from its content file and its registry entry.
import type { PageContent, Section, FaqItem } from './types';
import type { PageMeta } from './pages';
import { crumbsFor } from './pages';
import { getReview, quoteFor } from './reviews';
import { breadcrumbNode, faqNode, serviceNode, reviewNode, physiotherapyNode, personNode, itemListNode, abs, CLINIC_ID, PERSON_ID } from './schema';
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

const CLINIC_REF = { '@id': CLINIC_ID, name: BUSINESS.name };

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
      nodes.push({
        '@type': 'MedicalCondition',
        '@id': `${abs(meta.path)}#condition`,
        name: c?.name ?? meta.name,
        url: abs(meta.path),
        ...(c?.alternateName?.length ? { alternateName: c.alternateName } : {}),
        ...(c?.associatedAnatomy ? { associatedAnatomy: { '@type': 'AnatomicalStructure', name: c.associatedAnatomy } } : {}),
        possibleTreatment: {
          '@type': 'MedicalTherapy',
          name: c?.possibleTreatment ?? 'Physical therapy',
          ...(c?.parentServicePath ? { url: abs(c.parentServicePath) } : {}),
        },
      });
      reviews.forEach((r) => nodes.push({ ...r, itemReviewed: CLINIC_REF }));
      break;
    }
    case 'about':
      nodes.push(personNode(true));
      reviews.forEach((r) => nodes.push({ ...r, itemReviewed: { '@id': PERSON_ID, name: BUSINESS.doctor.display } }));
      break;
    case 'contact':
      nodes.push(physiotherapyNode(reviews));
      break;
    default:
      reviews.forEach((r) => nodes.push({ ...r, itemReviewed: CLINIC_REF }));
  }
  // The blog hub is a CollectionPage whose ItemList is every post, newest first.
  if (meta.type === 'blog-hub') {
    nodes.push({ '@type': 'CollectionPage', '@id': `${abs(meta.path)}#page`, name: page.hero.h1, url: abs(meta.path), description: page.description, isPartOf: { '@id': abs('/') + '#website' } });
    if (POSTS.length) nodes.push(itemListNode('Blog posts', POSTS.map((p) => ({ name: p.h1, path: p.path }))));
  }
  // Hubs list their children: an ItemList built from the cards on the page, in page order.
  if (meta.type.endsWith('-hub') && meta.type !== 'blog-hub') {
    const cards = page.sections.flatMap((s) => (s.kind === 'cards' ? [...(s.cards ?? []), ...(s.groups ?? []).flatMap((g) => g.cards)] : []));
    if (cards.length) nodes.push(itemListNode(meta.full, cards.map((c) => ({ name: c.title, path: c.href }))));
  }
  if (faqs.length) nodes.push(faqNode(faqs));
  nodes.push(...extra);
  nodes.push(breadcrumbNode(crumbs));
  return nodes;
}

export { itemListNode, abs };
