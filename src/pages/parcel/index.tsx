import Head from "next/head";
import { Card } from "~/components/cards/type-cards";
import Standard from "~/components/userdelivery/standard";
export default function Home() {
  return (
    <>
      <Head>
        <title>WebWay</title>
        <meta name="description" content="Webway" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <main>
      <div className="flex min-h-screen items-center justify-center">
  <div className="grid grid-cols-1 gap-5 content-center md:grid-cols-2 lg:grid-cols-2">
        <Card heading={"Standard Plan"} buttonText={"Book Now"} content={"Users who are comfortable taking their packages to the designated bus station and prioritize cost-effectiveness."} link={"/standard"} imagesrc={"/standard.png"}/>
        <Card heading={"Premium Plan"} buttonText={"Book Now"} content={"Schedule a pickup at your location. Our personnel will collect your package and deliver it to the designated bus station for onward travel."} link={"/premium"} imagesrc={"/premium.png"}/>
        </div>
        </div>
      </main>
    </>
  );
}

{
  
}
