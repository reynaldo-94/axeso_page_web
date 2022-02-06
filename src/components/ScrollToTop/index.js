import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PageContext from "../../contexts/PageContext";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const { setIsMenuOpen } = useContext(PageContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false)
  }, [pathname]);

  return null;
}