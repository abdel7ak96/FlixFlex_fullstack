import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';

type Data = {
  token: string;
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

  if (!ExistingUser) {
    res.status(400).send({ error: 'Username or password incorrect' });
  } else {
    const hash = bcrypt.hashSync(password, 10);
    if (ExistingUser.password != hash) {
      res.status(400).send({ error: 'Username or password incorrect' });
    }

    const jwtToken = jsonwebtoken.sign(
      { id: ExistingUser.id, username: ExistingUser.username },
      process.env.JWT_SECRET || ''
    );
    res.status(200).json({ token: jwtToken });
  }
}
