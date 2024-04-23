import ServicesSection from "../../components/ServicesSection/ServicesSection";
import "./Home.css";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";
import BrushImage from "../../components/SharedComponents/BrushImage/BrushImage";
import DownloadAppSection from "../../components/DownloadAppSection/DownloadAppSection";
import ContactUs from "../../components/ContactUs/ContactUs";
import OurTeam from "../../components/OurTeam/OurTeam";



const Home = () => {


  return (
    <main className="position-relative">
      <div  className="main-container">
        

          <BrushImage key={0} type={"l"} postion={"brush1"} />
          <BrushImage key={1} type={"r"} postion={"brush2"} />
          <ServicesSection />
          <BrushImage key={2} type={"l"} postion={"brush3"} />
          <ProjectsSection />
          <DownloadAppSection />
          <ContactUs />
          <OurTeam />
        
      </div>
    </main>
  );
};

export default Home;
