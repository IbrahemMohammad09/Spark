import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { Footer } from "./pages/Footer/Footer";
import AboutUs from "../src/pages/AboutUs/AboutUs";
import NavigationBar from "./pages/NavigationBar/NavigationBar";
import ContactUs from "./components/ContactUs/ContactUs";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import OurTeam from "./components/OurTeam/OurTeam";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import DownloadAppSection from "./components/DownloadAppSection/DownloadAppSection";
import "swiper/css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/about_us"} element={<AboutUs />} />
          <Route path={"/contact_us"} element={<ContactUs />} />
          <Route path={"/our_services"} element={<ServicesSection />} />
          <Route path={"/our_team"} element={<OurTeam />} />
          <Route path={"/our_projects"} element={<ProjectsSection />} />
          <Route path={"/our_app"} element={<DownloadAppSection />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
