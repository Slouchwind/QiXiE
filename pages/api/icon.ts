import iconSVG from '@/components/svg';
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'image/svg+xml');
  const { name = 'icon', type = 'color' } = req.query;
  if (name instanceof Array || type instanceof Array) return;
  res.status(200).send(iconSVG(name, type));
}
