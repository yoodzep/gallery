import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

// Check if we're using dummy data (no Sanity project configured)
const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const useDummyData = !projectId || projectId === 'your-project-id';

export const client = createClient({
  projectId: projectId || 'dummy',
  dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export { useDummyData };
