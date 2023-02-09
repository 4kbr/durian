import Header from "@/components/Header";
import Head from "next/head";

export default function HomePage(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Durian&apos;s Web Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <h1>Holla lets make it</h1>
    </div>
  );
}
