import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Settings } from "react-feather";
import BreatheCircle from "./components/BreatheCircle";

function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>AoA</title>
      </Head>
      <div className="flex w-full flex-col items-center justify-center gap-20 text-center text-2xl">
        <p className="text-2xl font-bold">AoA</p>
        <Link href="/log">
          <div>
            <BreatheCircle innerText="开始工作" />
          </div>
        </Link>
      </div>
      <div className="mt-10 flex w-full flex-wrap justify-center">
        <p className="font-bold">20分钟后休息一下</p>
      </div>
      <div className="absolute bottom-10 left-10 cursor-pointer">
        <Settings />
      </div>
    </React.Fragment>
  );
}



export default Home;
