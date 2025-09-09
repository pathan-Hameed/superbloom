import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // ✅ force scroll to top on route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // use "smooth" if you want animated scrolling
    });
  }, [pathname]);

  return null;
}
