import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: '1nq52o5y',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2022-11-15',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});
