import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  // eslint-disable-next-line no-undef
  projectId: import.meta.env.VITE_REACT_APP_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  // eslint-disable-next-line no-undef
  token: import.meta.env.VITE_REACT_APP_SANITY_TOKEN,
});

// console.log(import.meta.env.VITE_REACT_APP_SANITY_PROJECT_ID);

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
