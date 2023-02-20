import Header from "@/components/Header";
import Landing from "@/components/Landing";
import Product from "@/components/Product";
import { fetchCategories } from "@/utils/fetchCategories";
import { fetchProducts } from "@/utils/fetchProducts";
import { Tab } from "@headlessui/react";
import { GetServerSideProps } from "next";
import Head from "next/head";

interface Props {
  categories: Category[];
  products: Product[];
}

export default function HomePage({ categories, products }: Props): JSX.Element {
  // console.log({ products });

  function showProducts(category: Category) {
    return products
      .filter((product) => product.category._ref === category._id)
      .map((product) => <Product key={product._id} product={product} />);
  }

  // console.log({ categories });
  return (
    <div>
      <Head>
        <title>Durian&apos;s Web Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {/* Landing page promo */}
      <main className="relative min-h-[200vh] bg-[#e7ecee]">
        <Landing />
      </main>

      {/* yg discroll dari bawah */}
      <section className="relative z-40 bg-[#1b1b1b] -mt-[100vh] min-h-screen">
        <div className="space-y-10 py-16">
          <h1 className="text-center text-4xl font-medium tracking-wide text-white md:text-5xl ">
            New Promos
          </h1>
          <Tab.Group>
            <Tab.List className="flex rounded-xl p-1 justify-center items-center mx-10 sm:mx-[20%]">
              {categories.map((category) => (
                <Tab
                  key={category._id}
                  id={category._id}
                  className={({ selected }) =>
                    ` whitespace-nowrap rounded-t-lg py-3 px-5 text-sm font-light
                    outline-none md:py-4 md:px-6 md:text-base
                      ${
                        selected
                          ? "bg-[#35383c] text-white borderGradient"
                          : `text-gray-400 hover:bg-white/[0.12] hover:text-white
                          border-b-2 border-[#35383c] hover:border-[#565656]`
                      }
                    `
                  }
                >
                  {category.title}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mx-auto max-w-fit pt-10 sm:px-4">
              {categories.map((category, idx) => (
                <Tab.Panel
                  key={category._id}
                  id={category._id}
                  className={"tabPanel"}
                >
                  {showProducts(category)}
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const categories: Category[] = await fetchCategories();
  const products: Product[] = await fetchProducts();
  return {
    props: {
      categories,
      products,
    },
  };
};
