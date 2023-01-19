import { createClient } from "microcms-js-sdk"; //ES6

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN,
  apiKey: process.env.API_KEY,
});

export const getAllWorks = async (limit = 100) => {
  const works = await client.get({
    endpoint: "works",
    queries: {
      orders: "-publishDate",
      limit: limit,
    },
  });

  return works.contents;
};
