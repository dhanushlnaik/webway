import Link from "next/link";
// import { Home } from "lucide-react";
import Image from "next/image";
import { buttonVariants } from "../ui/button";
import MaxWidthWrapper from "./max-width-wrapper";
import AuthButton from "../auth/authButton";

export function Navbar() {
  return (
    <>
      <nav className="sticky inset-x-0 top-0 z-30 h-16 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all dark:bg-black">
        <MaxWidthWrapper>
          <div className="flex h-16 items-center justify-between border-b border-zinc-200">
            <Link href="/" className="z-40 flex font-semibold">
              <div className="flex h-14 items-center justify-between gap-2">
                <Image src="/logo.png" alt="logo" width={50} height={50} />
                <span className="text-[#5b6d42] ">WebWay.</span>
              </div>
            </Link>
            <div className="hidden items-center space-x-4 sm:flex">
              <Link
                href="/dashboard"
                className={buttonVariants({
                  variant: "mine",
                  size: "sm",
                })}
              >
                Home
              </Link>
              <Link
                href="/events"
                className={buttonVariants({
                  variant: "mine",
                  size: "sm",
                })}
              >
                About Us
              </Link>
              <Link
                href="/team"
                className={buttonVariants({
                  variant: "mine",
                  size: "sm",
                })}
              >
                Contact Us
              </Link>

              <AuthButton />
            </div>
          </div>
        </MaxWidthWrapper>
      </nav>
    </>
  );
}
