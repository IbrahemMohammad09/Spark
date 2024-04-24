import { Container,Row,Col } from "react-bootstrap";
import "./HeroSection.css"
import hero from '../../images/HeroSectionImags/hero.svg';
;

const HeroSection = () =>{

    return (
        <section id="hero" className="hero-section">

            <Container>
                <Row>
                    <Col md="6">
                        <div className="hero-text">
                            <h1 className="hero-h1">Biuld Your Dreams</h1>
                            <p className="hero-p">With us dreams will turn into reality</p>
                        </div>
                    </Col>
                    <Col md="6" className="div-img">
                        <img className="hero-img" src={hero} alt="hero img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}


export default HeroSection