import Stripe from "stripe";
import { supabase } from "@/src/lib/supabaseClient";
import { logger } from "@/utils/logger";
import { NextApiRequest, NextApiResponse } from "next";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-12-18.acacia", // Ensure this matches the supported version
});

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("Missing Stripe secret key. Please check your environment variables.");
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { bookingId } = req.body;

  if (!bookingId) {
    logger.error("Booking ID is missing in the request body.");
    return res.status(400).json({ error: "Booking ID is required." });
  }

  try {
    // Fetch booking details
    const { data: booking, error: fetchError } = await supabase
      .from("bookings")
      .select("*")
      .eq("id", bookingId)
      .single();

    if (fetchError) {
      logger.error("Error fetching booking from Supabase", { error: fetchError });
      return res.status(500).json({ error: "Failed to fetch booking details." });
    }

    if (!booking) {
      logger.error("Booking not found", { bookingId });
      return res.status(404).json({ error: "Booking not found." });
    }

    // Calculate the payment amount dynamically if needed (e.g., based on booking details)
    const amountInCents = 5000; // Replace with a calculated value if applicable

    // Create a payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amountInCents,
      currency: "usd",
      metadata: { bookingId: booking.id },
    });

    logger.info("Payment intent created successfully", {
      clientSecret: paymentIntent.client_secret,
      bookingId: booking.id,
    });

    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    logger.error("Error creating payment intent", { error: err });
    res.status(500).json({ error: "Failed to create payment intent." });
  }
}