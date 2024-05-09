import ServicesSection from "../../components/ServicesSection/ServicesSection";
import "./Home.css";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";
import BrushImage from "../../components/SharedComponents/BrushImage/BrushImage";
import DownloadAppSection from "../../components/DownloadAppSection/DownloadAppSection";
import ContactUs from "../../components/ContactUs/ContactUs";
import OurTeam from "../../components/OurTeam/OurTeam";
import HeroSection from "../../components/HeroSection/HeroSection";
import SEO from "../../components/SharedComponents/SEO/SEO";
import { metaSEO } from "../../utils/constants";

const Home = () => {
  return (
    <main className="" style={{ overflowX: "hidden" }}>
      <div className="main-container">
        <HeroSection />
        <BrushImage key={0} type={"l"} postion={"brush1"} />
        <BrushImage key={1} type={"r"} postion={"brush2"} />
        <ServicesSection />
        <BrushImage key={2} type={"l"} postion={"brush3"} />
        <ProjectsSection />
        <DownloadAppSection />
        <ContactUs />
        <OurTeam />
      </div>
      <SEO
        title={"Spark"}
        description={metaSEO.about.description}
        name={"Spark"}
        type={"website"}
        keywords={[
          "software develpoment",
          "software engineer",
          "student services",
        ]}
      />
    </main>
  );
};

export default Home;
