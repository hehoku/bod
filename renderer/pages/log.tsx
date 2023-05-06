import React, { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { Settings } from "react-feather";
import useTimerStore from "./store/timerStore";
import BreatheCircle from "./components/BreatheCircle";

const numToTime = (num: number): string => {
  const minutes = Math.floor(num / 60).toString().padStart(2, "0");
  const seconds = (num % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
};

function Log(): JSX.Element {
  const { seconds } = useTimerStore();

  useEffect(() => {
    const timerId = setInterval(() => {
      useTimerStore.setState((state) => ({ seconds: state.seconds + 1 }));
    }, 1000);
    return () => clearInterval(timerId);
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>AoA</title>
      </Head>
      <div className="flex w-full flex-col items-center justify-center gap-20 text-center text-2xl">
        <Link href="/home">
          <p className="cursor-pointer text-2xl font-bold">AoA</p>
        </Link>
        <BreatheCircle innerText={numToTime(seconds)} />
      </div>
      <div className="mt-10 flex w-full flex-wrap justify-center">Log Page</div>
      <div className="absolute bottom-10 left-10 cursor-pointer">
        <Settings />
      </div>
    </React.Fragment>
  );
}

export default Log;
