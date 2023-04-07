// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/server/db/client";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const first = await prisma.table36100402.findFirst({
    where: {
      VALUE: {
        gt: 1000,
      },
    },
  });
  res.status(200).json({ first: first });
}
