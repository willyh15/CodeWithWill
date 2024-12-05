import { NextApiRequest, NextApiResponse } from 'next';
import { calendar } from '@/lib/googleCalendarClient';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const event = req.body;
      const response = await calendar.events.insert({
        calendarId: 'primary',
        requestBody: event,
      });
      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create event' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}