"use client";

import { useEffect } from "react";

const NoScrollRestoration = () => {
  useEffect(() => {
    history.scrollRestoration = "manual";
  }, []);

  return null;
};

export default NoScrollRestoration;
