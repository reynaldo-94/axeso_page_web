import * as React from "react";
import AppBar from "@mui/material/AppBar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import styles from "./style.module.scss";
import { NavLink } from "react-router-dom";
import logo from "../../assets/system/logo.svg";
import { FcMenu } from "react-icons/fc";
import { darkBlueColor } from "../../constants/color";
import { useContext } from "react";
import PageContext from "../../contexts/PageContext";

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function NavBar(props) {
  const { isMobile, isMenuOpen, setIsMenuOpen } = useContext(PageContext);

  return (
    <React.Fragment>
      <ElevationScroll {...props}>
        <AppBar>
          {
            <nav className={styles.nav}>
              <div className={styles.navLogo}>
                <NavLink exact to="/" style={{ borderBottom: "none" }}>
                  <img src={logo} alt="Logo" width={50} height={40} />
                </NavLink>
                <h1>Axeso</h1>
              </div>
              <ul
                className={
                  !isMobile || (isMobile && isMenuOpen) ? null : styles.closed
                }
              >
                <li className={styles.closeNav}>
                  <a onClick={() => setIsMenuOpen(false)}>X</a>
                </li>
                <li>
                  <NavLink exact to="/nosotros" activeClassName="active">
                    Nosotros
                  </NavLink>
                </li>
                <li className={styles.optionsPadding}>
                  <NavLink exact to="/proyectos" activeClassName="active">
                    Proyectos
                  </NavLink>
                </li>
                <li className={styles.optionsPadding}>
                  <NavLink exact to="/blog" activeClassName="active">
                    Blog
                  </NavLink>
                </li>
                <li className={styles.optionsPadding}>
                  <NavLink exact to="/contactanos" activeClassName="active">
                    Contáctanos
                  </NavLink>
                </li>
              </ul>
              <div
                className={styles.iconMenu}
                onClick={() => setIsMenuOpen(true)}
              >
                <FcMenu size={30} color={darkBlueColor} />
              </div>
            </nav>
          }
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  );
}
