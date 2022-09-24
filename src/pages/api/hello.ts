// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {get, put } from "../../lib/dynamodb/operations";
import {logger} from "../../logging/logger";

type Data = {
  name: string
}

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  logger.info('Route /hello handler')
  const dbData = await get()
  res.status(200).json({data: dbData})
}
