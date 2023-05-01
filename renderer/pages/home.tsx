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
      <div className="flex items-center justify-center flex-col gap-20 text-2xl w-full text-center">
        <p className="text-2xl font-bold">AoA</p>
        <div className="bg-gray-300 w-48 h-48 rounded-full flex cursor-pointer items-center justify-center">
          <p className="cursor-pointer">开始工作</p>
        </div>
      </div>
      <div className="w-full flex-wrap flex justify-center mt-10">
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
