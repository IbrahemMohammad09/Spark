import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './animation.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './pages/NavigationBar/NavigationBar';
import ScrollToTopOnPageChange from "./ScrollToTopOnPageChange ";
import { Footer } from './pages/Footer/Footer';
import LoadingPage from "./pages/loadingPage/loadingPage";


const Home = lazy(() => import('./pages/Home/Home'));
const AboutUs = lazy(() => import('../src/pages/AboutUs/AboutUs'));
const ContactUs = lazy(() => import('./components/ContactUs/ContactUs'));
const OurTeamPage = lazy(() => import('./pages/ourTeamPage/ourTeamPage'));
const OurProjects = lazy(() => import('../src/pages/OurProjects/OurProjects'));
const DownloadAppSection = lazy(() => import('./components/DownloadAppSection/DownloadAppSection'));
const OurServicesPage = lazy(() => import('./pages/ourServicesPage/ourServicesPage'));
const CompanyServices = lazy(() => import('./pages/CompanyServices/CompanyServices'));
const DetailServices = lazy(() => import('./pages/DetailServices/DetailServices'));
const StudentServicesSection = lazy(() => import('./pages/StudentServicesSection/StudentServicesSection'));
const CompanyRequestPage = lazy(() => import('./pages/CompanyRequestPage/CompanyRequestPage'));
const StudentServices = lazy(() => import('./pages/StudentServices/StudentServices'));
const StudentProjects = lazy(() => import('./pages/StudentProjects/StudentProjects'));
const StudentProjectRequest = lazy(() => import('./pages/StudentProjectRequest/StudentProjectRequest'));
const ErrorPage = lazy(() => import('./pages/ErrorPage/ErrorPage'));
const StudentCourses = lazy(() => import('./pages/StudentCourses/StudentCourses'));
const ComingSoon = lazy(() => import('./pages/ComingSoon/ComingSoon'));
const ViewProject = lazy(() => import('./pages/ViewProject/ViewProject'));
const StudentCourseRequest = lazy(() => import('./pages/StudentCourseRequest/StudentCourseRequest'));

function App() {
  return (
    <div className="App position-relative">
      <BrowserRouter>
        <ScrollToTopOnPageChange />
        <NavigationBar />
        <Suspense fallback={<LoadingPage />}>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about_us" element={<AboutUs />} />
            <Route path="/contact_us" element={<ContactUs />} />
            <Route path="/services" element={<OurServicesPage />} />
            <Route path="/our_team" element={<OurTeamPage />} />
            <Route path="/our-projects" element={<OurProjects />} />
            <Route path="/our_app" element={<DownloadAppSection />} />
            <Route path="/company-services" element={<CompanyServices />} />
            <Route path="/service/:id" element={<DetailServices />} />
            <Route path="/student-section-services" element={<StudentServicesSection />} />
            <Route path="/company-request/:id" element={<CompanyRequestPage />} />
            <Route path="/student-services/:id" element={<StudentServices />} />
            <Route path="/student-projects/:id" element={<StudentProjects />} />
            <Route path="/view-project/:id" element={<ViewProject />} />
            <Route path="/student-project-request/:id" element={<StudentProjectRequest />} />
            <Route path="/student-course-request/:id" element={<StudentCourseRequest />} />
            <Route path="/student-courses/:id" element={<StudentCourses />} />
            <Route path="/error-page" element={<ErrorPage />} />
            <Route path="/coming" element={<ComingSoon />} />
            <Route path="*" element={<Navigate to="/error-page" />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
