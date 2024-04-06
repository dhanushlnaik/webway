import Head from "next/head";
import localFont from "next/font/local";
import MaxWidthWrapper from "~/components/layout/max-width-wrapper";
import Fade from "react-awesome-reveal";
const myFont = localFont({ src: "../../lib/obscura.otf" });

export default function Home() {
  return (
    <>
        <MaxWidthWrapper className="mb-12 mt-9 sm:mt-12 flex flex-col items-center justify-center text-center">
        <Fade triggerOnce cascade>
            <div className="mt-5 mb-5">
                <h1
                    className={`${myFont.className} bg-gradient-to-b from-blue-600 to-white bg-clip-text pt-10 text-center text-6xl font-black text-transparent underline-offset-2 `}
                >
                    Select a Bus
                </h1>
                <p className="mt-5 text-center max-w-prose text-white sm-text-lg font-semibold underline">
                    lorem ipsum
                </p>
                <div className="mx-auto mb-10 mt-10 w-[60rem] h-40 rounded-xl bg-white p-4 shadow-input dark:bg-black md:rounded-2xl md:p-8">
                
                </div>
            </div>
            </Fade>
        </MaxWidthWrapper>
    </>
  );
}

{
  
}
