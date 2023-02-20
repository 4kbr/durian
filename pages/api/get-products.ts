import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";

/// use grog query
const query = groq`*[_type=="product"]{
  _id,
  ...
}|order(_createdAt asc)`;

type Data = {
  status: number;
  message: string;
  result: {
    products: Product[];
  };
};

export default async function post(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  /// fetch sanity api using groq
  const products = await sanityClient.fetch(query);
  res.status(200).json({
    status: 200,
    message: "successfully transfer data",
    result: { products },
  });
}
