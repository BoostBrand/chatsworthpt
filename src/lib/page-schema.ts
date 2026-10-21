// Builds the one JSON-LD @graph for an inner page from its content file and its registry entry.
import type { PageContent, Section, FaqItem } from './types';
import type { PageMeta } from './pages';
import { crumbsFor } from './pages';
import { getReview, quoteFor } from './reviews';
import { breadcrumbNode, faqNode, serviceNode, reviewNode, physiotherapyNode, personNode, itemListNode, abs, CLINIC_ID, PERSON_ID } from './schema';
import { BUSINESS } from '../data/site';

type Node = Record<string, unknown>;

export function faqsOf(sections: Section[]): FaqItem[] {
  return sections.flatMap((s) => (s.kind === 'faq' ? s.items : []));
}

export function reviewsOf(sections: Section[]): Node[] {
  return sections
    .filter((s): s is Extract<Section, { kind: 'review' }> => s.kind === 'review')
    .map((s) => reviewNode(getReview(s.review.key).displayName, quoteFor(s.review)));
}

const CLINIC_REF = { '@id': CLINIC_ID, name: BUSINESS.name };

export function graphFor(page: PageContent, meta: PageMeta, extra: Node[] = []): Node[] {
  const nodes: Node[] = [];
  const faqs = faqsOf(page.sections);
  const reviews = reviewsOf(page.sections);
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
  if (faqs.length) nodes.push(faqNode(faqs));
  nodes.push(...extra);
  nodes.push(breadcrumbNode(crumbs));
  return nodes;
}

export { itemListNode, abs };
