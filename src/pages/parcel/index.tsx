import Head from "next/head";
import LandingText from "~/components/layout/landing-text";
import Standard from "~/components/userdelivery/Standard";
import Express from "~/components/userdelivery/express";

export default function Home() {
  return (
    <>
      <Head>
        <title>WebWay</title>
        <meta name="description" content="Webway" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <main>
        <Standard/>
      </main>
    </>
  );
}
