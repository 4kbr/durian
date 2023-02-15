import Header from "@/components/Header";
import Landing from "@/components/Landing";
import { fetchCategories } from "@/utils/fetchCategories";
import { Tab } from "@headlessui/react";
import { GetServerSideProps } from "next";
import Head from "next/head";

export default function HomePage(): JSX.Element {
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
            <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
              {/* {Object.keys(categories).map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                      "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                      selected
                        ? "bg-white shadow"
                        : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                    )
                  }
                >
                  {category}
                </Tab>
              ))} */}
            </Tab.List>
            <Tab.Panels className="mt-2">
              {/* {Object.values(categories).map((posts, idx) => (
                <Tab.Panel
                  key={idx}
                  className={classNames(
                    "rounded-xl bg-white p-3",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                  )}
                >
                  <ul>
                    {posts.map((post) => (
                      <li
                        key={post.id}
                        className="relative rounded-md p-3 hover:bg-gray-100"
                      >
                        <h3 className="text-sm font-medium leading-5">
                          {post.title}
                        </h3>

                        <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                          <li>{post.date}</li>
                          <li>&middot;</li>
                          <li>{post.commentCount} comments</li>
                          <li>&middot;</li>
                          <li>{post.shareCount} shares</li>
                        </ul>

                        <a
                          href="#"
                          className="absolute inset-0 rounded-md ring-blue-400
                           focus:z-10 focus:outline-none focus:ring-2"
                        />
                      </li>
                    ))}
                  </ul>
                </Tab.Panel>
              ))} */}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  // const categories = await fetchCategories();

  return {
    props: {
      categories: "categories",
    },
  };
};
