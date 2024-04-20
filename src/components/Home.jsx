import NavigationBar from "./NavigationBar/NavigationBar";
import ServicesSection from "./ServicesSection/ServicesSection";
import './Home.css'
import ProjectsSection from "./ProjectsSection/ProjectsSection";
import BrushImage from "./SharedComponents/BrushImage/BrushImage";

const Home = () => {
  return (
    <div className="main-container">
      <NavigationBar/>
      <main className="position-relative">
        <BrushImage key={0} type={'l'} postion={'brush1'}/>
        <BrushImage key={1} type={'r'} postion={'brush2'}/>      
        <ServicesSection/>
        <BrushImage key={2} type={'l'} postion={'brush3'}/>
        <ProjectsSection/>
      </main>
    </div>
  );
};

export default Home;
