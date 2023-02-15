import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";

/// use grog query
const query = groq`*[_type == "category"]{
  _id,
  slug,
  title
}
`;

type Data = {
  status: number;
  message: string;
  categories: Category[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  /// fetch sanity api using groq
  const categories = await sanityClient.fetch(query);
  console.log({ categories });
  res.status(200).json({ categories, status: 200, message: "oke sukses" });
}
