import { Container,Row,Col } from "react-bootstrap";
import "./HeroSection.css"
import hero from '../../images/HeroSectionImags/hero.svg';
import NavigationBar from "../../pages/NavigationBar/NavigationBar";

const HeroSection = () =>{

    return (
        <section id="hero" className="hero-section">
            <NavigationBar sectionName='hero'/>
            <Container>
                <Row>
                    <Col>
                        <div>
                            <h1>Biuld Your Dreams</h1>
                            <p>With us dreams will turn into reality</p>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <img src={hero} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}


export default HeroSection