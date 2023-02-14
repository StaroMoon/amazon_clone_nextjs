import { NextApiRequest, NextApiResponse } from "next";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { items, email } = req.body;

  // Transform our data into format that Stripe accepted
  const transformedItems = items.map((item: any) => ({
    quantity: 1,
    price_data: {
      currency: "aud",
      unit_amount: item.price * 100,
      product_data: {
        name: item.title,
        images: [item.image],
        description: item.description,
      },
    },
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_options: [{ shipping_rate: "shr_1Maa4eIoR1cIbDiSHDDbGYcG" }],
    line_items: transformedItems,
    shipping_address_collection: {
      allowed_countries: ["AU", "TH"],
    },
    mode: "payment",
    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}/checkout`,
    metadata: {
      email,
      images: JSON.stringify(items.map((item: any) => item.image)),
    },
  });

  res.status(200).json({ id: session.id });
}
