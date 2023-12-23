import React, { useRef } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animationData from "@/lottie/loading-animation.json";
import { AnimatePresence, motion } from "framer-motion";

const LoadingScreen = () => {
  const ref = useRef<LottieRefCurrentProps>(null);

  return (
    <AnimatePresence>
      <motion.div
        exit={{ y: "-100%" }}
        className="w-screen h-screen flex justify-center items-center"
      >
        <div className="w-1/4 h-1/4">
          <Lottie lottieRef={ref} animationData={animationData} />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
