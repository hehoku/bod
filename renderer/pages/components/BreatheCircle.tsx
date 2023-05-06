import { motion } from "framer-motion";

type BreatheCircleProps = {
  innerText: string;
};

const BreatheCircle = ({ innerText }: BreatheCircleProps) => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative h-48 w-48 cursor-pointer">
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
          {innerText}
        </div>
      </div>
    </div>
  );
};

export default BreatheCircle;
