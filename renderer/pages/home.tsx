import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Settings } from "react-feather";

function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>AoA</title>
      </Head>
      <div className="flex w-full flex-col items-center justify-center gap-20 text-center text-2xl">
        <p className="text-2xl font-bold">AoA</p>
        <div className="flex h-48 w-48 cursor-pointer items-center justify-center rounded-full bg-gray-300">
          <p className="cursor-pointer">开始工作</p>
        </div>
      </div>
      <div className="mt-10 flex w-full flex-wrap justify-center">
        <Link href="/next">
          <a className="btn-blue">Go to next page</a>
        </Link>
      </div>
      <div className="absolute bottom-10 left-10 cursor-pointer">
        <Settings />
      </div>
    </React.Fragment>
  );
}

export default Home;
