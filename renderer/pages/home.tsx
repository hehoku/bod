import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Settings } from "react-feather";
import { motion } from "framer-motion";

function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>AoA</title>
      </Head>
      <div className="flex w-full flex-col items-center justify-center gap-20 text-center text-2xl">
        <p className="text-2xl font-bold">AoA</p>
        <BreatheCircle />
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


const BreatheCircle = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-48 h-48 cursor-pointer">
        <motion.div
          className="-z-1 absolute h-48 w-48 rounded-full bg-gray-300"
          style={{ transformOrigin: "center" }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-xl font-bold text-black">
          开始工作
        </div>
      </div>
    </div>
  );
};

export default Home;
