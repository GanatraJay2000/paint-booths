import { useEffect, useState } from "react";

const MOBILE_WIDTH = 768;

function useIsMobile(): boolean {
  const [isMobile, setValue] = useState<boolean>(false);

  useEffect(() => {
    const handleWindowResize = () => {
      setValue(window.innerWidth <= MOBILE_WIDTH);
    };

    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return isMobile;
}

export default useIsMobile;
