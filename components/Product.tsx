import { urlFor } from "@/sanity";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import Image from "next/image";
import React from "react";
interface Props {
  product: Product;
}
export default function Product({ product }: Props) {
  const addItemToBasket = () => {};
  return (
    <div
      className="flex h-fit w-[320px] select-none flex-col space-y-3 
    rounded-xl bg-[#35383c] p-8 md:h-[500px] md:w-[400px] md:p-10"
    >
      <div className="relative h-64 w-full md:h-72">
        <Image
          src={urlFor(product.image[0]).url()}
          alt={product.title}
          fill
          style={{ objectFit: "contain" }}
        />
      </div>

      <div className="flex flex-1 items-center justify-between space-x-3">
        <div className="space-y-2 text-xl text-white md:text-2xl">
          <p>{product.title}</p>
          <p>${product.price}</p>
        </div>

        <div className="boxIcon" onClick={addItemToBasket}>
          <ShoppingCartIcon className="text-white h-8 w-8" />
        </div>
      </div>
    </div>
  );
}
