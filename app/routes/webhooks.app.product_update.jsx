import { authenticate } from "../shopify.server";
import db from "../db.server";

export const action = async ({ request }) => {
  const { payload, topic, shop } = await authenticate.webhook(request);

  const productId = payload.id;
  const title = payload.title;
  const firstVariantPrice = payload.variants?.[0]?.price;

  console.log(`🛎️ Product updated: ${title} (ID: ${productId})`);
  console.log(`💲 New price: ${firstVariantPrice}`);

  return new Response();
};
