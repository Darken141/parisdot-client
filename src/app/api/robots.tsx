import type { NextApiRequest, NextApiResponse } from 'next'

import { crawable, notCrawable } from "@/config/robots.config"

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const robots = process.env.ENVIRONMENT === 'production' ? crawable : notCrawable 
  
  res.status(200).send(robots)
}
