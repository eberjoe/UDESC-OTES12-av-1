import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const body = req.body;
  const bdResponse = await prisma.ticket.create({
    data: {
      ...body
    }
  });
  res.status(200).json(bdResponse);
};
