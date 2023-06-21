import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';
import { prisma } from '../../lib/prisma';

type Data = {
  token: string;
};

type Error = {
  error: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Error>
) {
  const username = req.body.username;
  const password = req.body.password;

  const ExistingUser = await prisma.user.findFirst({ where: { username } });

  if (!ExistingUser || !bcrypt.compareSync(password, ExistingUser.password)) {
    res.status(400).json({ error: 'Username or password incorrect' });
  } else {
    const jwtToken = jsonwebtoken.sign(
      { id: ExistingUser?.id, username: ExistingUser?.username },
      process.env.JWT_SECRET || ''
    );
    res.status(200).json({ token: jwtToken });
  }
}
