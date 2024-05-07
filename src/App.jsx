import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./animation.css";
import "./App.css";
import Home from "./pages/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { Footer } from "./pages/Footer/Footer";
import AboutUs from "../src/pages/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import OurTeam from "./components/OurTeam/OurTeam";
import OurProjects from "../src/pages/OurProjects/OurProjects";
import DownloadAppSection from "./components/DownloadAppSection/DownloadAppSection";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import "swiper/css";
import CompanyServices from "./pages/CompanyServices/CompanyServices";
import DetailServices from "./pages/DetailServices/DetailServices";
import NavigationBar from "./pages/NavigationBar/NavigationBar";
import ScrollToTopOnPageChange from "./ScrollToTopOnPageChange ";
import StudentServicesSection from "./pages/StudentServicesSection/StudentServicesSection";
import CompanyRequestPage from "./pages/CompanyRequestPage/CompanyRequestPage";
import CompleteRequest from "./pages/CompleteRequest/CompleteRequest";
import StudentServices from "./pages/StudentServices/StudentServices";
import StudentProjects from "./pages/StudentProjects/StudentProjects";
import StudentProjectRequest from "./pages/StudentProjectRequest/StudentProjectRequest";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import StudentCourses from "./pages/StudentCourses/StudentCourses";
import { ComingSoon } from "./pages/ComingSoon/ComingSoon";
import ViewProject from'./pages/ViewProject/ViewProject'


function App() {
  return (
    <div className="App position-relative">
      <BrowserRouter>
        <ScrollToTopOnPageChange />
        <NavigationBar />
        <Routes>
          <Route path={"/"} exact element={<Home />} />
          <Route path={"/about_us"} element={<AboutUs />} />
          <Route path={"/contact_us"} element={<ContactUs />} />
          <Route path={"/services"} element={<ServicesSection />} />
          <Route path={"/our_team"} element={<OurTeam />} />
          <Route path={"/our-projects"} element={<OurProjects />} />
          <Route path={"/our_app"} element={<DownloadAppSection />} />
          <Route path={"/company-services"} element={<CompanyServices />} />
          <Route path={"/service/:id"} element={<DetailServices />} />
          <Route path={"/student-section-services"} element={<StudentServicesSection />} />
          <Route path={"/company-request/:id"} element={<CompanyRequestPage />} />
          <Route path={"/completed"} element={<CompleteRequest />} />
          <Route path={"/student-services/:id"} element={<StudentServices />} />
          <Route path={"/student-projects/:id"} element={<StudentProjects />} />
          <Route path={"/student-project-request/:id"} element={<StudentProjectRequest />} />
          <Route path="/view-project/:id" element={<ViewProject />}/>
          <Route path={"/student-courses/:id"} element={<StudentCourses />} />
          <Route path="/error-page" element={<ErrorPage />} />
          <Route path="*" element={<Navigate to={"/error-page"} />} />
          <Route path="/coming" element={<ComingSoon />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
