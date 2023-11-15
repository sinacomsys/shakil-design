import { useEffect, useState } from "react";

export const useWindowSize = () => {
  const [{ height, width }, setScreenSizes] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSizes({ height: window.innerHeight, width: window.innerWidth });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { height, width };
};
