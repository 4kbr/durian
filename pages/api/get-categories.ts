import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  status: number;
  message: string;
  categories: Category[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  return res.status(200).json({
    status: 200,
    message: "Berhasil",
    categories: [],
  });
  // const categories = await sanityClient.fetch(query)
}
