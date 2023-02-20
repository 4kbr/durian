export const fetchProducts: () => Promise<Product[]> = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/get-products`
    );
    const data = await res.json();
    const products: Product[] = data.result.products;
    // console.log({ data });
    return products;
  } catch (error) {
    throw error;
  }
};
