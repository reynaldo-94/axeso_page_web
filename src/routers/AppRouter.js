import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import BasicLayout from "../layouts/BasicLayout";
import Blog from "../pages/Blog";
import ContactUs from "../pages/ContactUs";
import HomePage from "../pages/HomePage";
import Projects from "../pages/Projects";
import Design from "../pages/services/Design";
import Development from "../pages/services/Development";
import BusinessIntelligence from "../pages/services/BusinessIntelligence";
import Us from "../pages/Us";
import AxesoApp from "../pages/projects/AxesoApp";
import AxesoFarma from "../pages/projects/AxesoFarma";
import WebProviders from "../pages/projects/WebProviders";
import VendorsApp from "../pages/projects/VendorsApp";
import ScrollToTop from "../components/ScrollToTop";
import { PageProvider } from "../contexts/PageContext";

export default function AppRouter() {
  return (
    <Router>
      <PageProvider>
        <ScrollToTop />
        <BasicLayout>
          <Routes>
            {/* MENU */}
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/nosotros" element={<Us />} />
            <Route exact path="/proyectos" element={<Projects />} />
            <Route exact path="/blog" element={<Blog />} />
            {/* SERVICES */}
            <Route exact path="/contactanos" element={<ContactUs />} />
            <Route exact path="/disenio" element={<Design />} />
            <Route exact path="/desarrollo" element={<Development />} />
            <Route exact path="/business-intelligence" element={<BusinessIntelligence />} />
            {/* PROJECTS */}
            <Route exact path="/proyectos/axeso-app" element={<AxesoApp />} />
            <Route
              exact
              path="/proyectos/web-proveedores"
              element={<WebProviders />}
            />
            <Route
              exact
              path="/proyectos/vendors-app"
              element={<VendorsApp />}
            />
            <Route
              exact
              path="/proyectos/axeso-farma"
              element={<AxesoFarma />}
            />
          </Routes>
        </BasicLayout>
      </PageProvider>
    </Router>
  );
}
