import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '@/lib/supabaseClient';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === 'DELETE') {
    const { error } = await supabase.from('bookings').delete().eq('id', id);
    if (error) {
      res.status(500).json({ error: 'Failed to delete booking' });
    } else {
      res.status(200).json({ message: 'Booking deleted successfully' });
    }
  } else {
    res.setHeader('Allow', ['DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}