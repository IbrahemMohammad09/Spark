import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavigationBar.css'
// import { Button } from 'react-bootstrap';
import { useState } from 'react';



const NavigationBar = () =>{
    const [language, setLanguage] = useState('en');

    const handleChangeLanguageButton = () => {
        setLanguage(language === "ar"? "en": "ar");
    }

    return(
        <div className='nav'>
            <Navbar expand="sm" collapseOnSelect variant="dark" fixed="top" bg="black">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            className="logo"
                            loading="lazy"
                            alt=""
                            src={require('../../images/logo.png')}
                        />
                        <div className="spark">SPARK</div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse>
                        <Nav className="justify-content-center" style={{ width: "80%" }} >
                            <Nav.Link href='#home'>Home</Nav.Link>
                            <Nav.Link href="#AboutUS" >About US</Nav.Link>
                            <Nav.Link href="#Services">Services</Nav.Link>
                            <Nav.Link href="#Our_Projects">Our Projects</Nav.Link>
                            <Nav.Link href="#Contact_us">Contact US</Nav.Link>
                            <Nav.Link href="#Our_Family">Our Family</Nav.Link>
                            <Nav.Item>
                                <button className={`change-language-button mobile ${language}`} onClick={handleChangeLanguageButton} title={`Switch To ${language === "ar"? "English":"Arabic"}`}>
                                    <span>AR</span>
                                    <span>EN</span>
                                    <div></div>
                                </button>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                    <button className={`change-language-button ${language}`} onClick={handleChangeLanguageButton} title={`Switch To ${language === "ar"? "English":"Arabic"}`}>
                            <span>AR</span>
                            <span>EN</span>
                            <div></div>
                    </button>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavigationBar