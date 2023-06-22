import type { NextApiRequest, NextApiResponse } from 'next';
import jsonwebtoken from 'jsonwebtoken';
import { prisma } from '../../lib/prisma';

type Data = {
  data: string[];
};

type Error = {
  error: string;
};

type DecodedJwt = {
  id: number;
  username: string;
  iat: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Error>
) {
  const { _auth_token } = req.cookies;
  const fav = req.query.fav as string;

  try {
    const decoded = await jsonwebtoken.verify(
      _auth_token || '',
      process.env.JWT_SECRET || ''
    );
    const { id } = decoded as DecodedJwt;

    if (req.method === 'PUT' && fav) {
      await prisma.user.update({
        where: {
          id,
        },
        data: {
          favorites: {
            create: {
              id: fav,
            },
          },
        },
      });
    } else if (req.method === 'DELETE') {
      await prisma.user.update({
        where: {
          id,
        },
        data: {
          favorites: {
            delete: {
              id: fav,
            },
          },
        },
      });
    }

    const favorites = await prisma.favorite.findMany({
      where: {
        userId: id,
      },
    });

    res.status(200).json({ data: favorites.map((fav) => fav.id) });
  } catch (error) {
    res.status(400).json({ error: 'Invalid JWT Token' });
  }
}
