import Header from "@/components/Header";
import Landing from "@/components/Landing";
import Head from "next/head";

export default function HomePage(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Durian&apos;s Web Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Landing />
      </main>
    </div>
  );
}
