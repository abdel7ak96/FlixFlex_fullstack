import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';
import { prisma } from '../../lib/prisma';

type Error = {
  error: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string | Error>
) {
  const username = req.body.username;
  const password = req.body.password;

  const ExistingUser = await prisma.user.findFirst({ where: { username } });

  if (ExistingUser) {
    res.status(500).send({ error: 'Username is not valid' });
  }

  const hash = bcrypt.hashSync(password, 10);

  const newUser = await prisma.user.create({
    data: {
      username,
      password: hash,
    },
  });

  const jwtToken = jsonwebtoken.sign(
    { id: newUser.id, username: newUser.username },
    process.env.JWT_SECRET || ''
  );
  res.status(200).json(jwtToken);
}
