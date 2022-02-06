import { useEffect, useState } from "react";
import { createContext } from "react";

const PageContext = createContext()

const PageProvider = ({ children }) => {

  const [state, setState] = useState({
    mobileView: false,
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const { mobileView } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    }
  }, [])

  return (
    <PageContext.Provider value={{ isMobile: mobileView, isMenuOpen, setIsMenuOpen }}>
      {children}
    </PageContext.Provider>
  )
}

export { PageProvider }
export default PageContext