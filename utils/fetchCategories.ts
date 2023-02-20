export const fetchCategories: () => Promise<Category[]> = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/get-categories`
    );
    const data = await res.json();
    const categories: Category[] = data.data.categories;
    // console.log({ data });
    return categories;
  } catch (error) {
    throw error;
  }
};
