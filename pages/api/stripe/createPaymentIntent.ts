import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

// Ensure you use your secret key or a mock during development
const stripeSecretKey = process.env.STRIPE_SECRET_KEY || "sk_test_mock";

// Use a type assertion to bypass strict TypeScript checking for unsupported API versions
const stripe = new Stripe(stripeSecretKey, {
  apiVersion: "2024-12-18" as any, // Bypass type-checking for unsupported versions
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!process.env.STRIPE_SECRET_KEY) {
    return res.status(500).json({ error: "STRIPE_SECRET_KEY is not set." });
  }

  if (req.method === "POST") {
    try {
      const { amount, currency } = req.body;

      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency,
        payment_method_types: ["card"],
      });

      res.status(200).json({ clientSecret: paymentIntent.client_secret });
    } catch (error: any) {
      console.error("Stripe error:", error.message);
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}