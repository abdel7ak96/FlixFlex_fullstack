import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

type Data = {
  id: number;
};

type Error = {
  error: string;
};
const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Error>
) {
  const username = req.body.username;
  const password = req.body.password;

  const ExistingUser = await prisma.user.findFirst({ where: { username } });

  if (ExistingUser) {
    res.status(500).send({ error: 'Username is not valid' });
  }

  const newUser = await prisma.user.create({
    data: {
      username,
      password,
    },
  });

  res.status(200).json({ id: newUser.id });
}
