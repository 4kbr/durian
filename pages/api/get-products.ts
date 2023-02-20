import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";

/// use grog query
const query = groq`*[_type=="product"]{
  _id,
  slug,
  title
}|order(_createdAt asc)`;

type Data = {
  status: number;
  message: string;
  data: {
    categories: Product[];
  };
};

export default async function post(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  /// fetch sanity api using groq
  const categories = await sanityClient.fetch(query);
  res.status(200).json({
    status: 200,
    message: "successfully transfer data",
    data: { categories },
  });
}
