import React from "react";
import SkillsSection from './SkillsSection';
import { Container, Card, Row, Col } from 'react-bootstrap';


const About = () => {
    const textColour = {
        color: "var(--tertiary)"
    }
    return (
        <Container className="my-5">
            <Card className="mx-auto p-5" bg="dark" id="about-me">
                <Row>
                    <Col md={8} className="d-flex align-items-container">
                        <Card.Body>
                            <Card.Title style={{ color: '#3051BD', fontSize: '2.5rem'}}>About Me</Card.Title>
                            <Card.Text style={textColour}>
                                Hi! I'm Chris and I am a recent computing graduate from British Columbia Institute of Technology (BCIT) with a passion for web development. My interest in web development started from my very first web development course in the Computer Information Technology program at BCIT. I love building projects from the ground up, solving problems and visually seeing the changes I am implementing.<br/><br/>

                                During my time at BCIT, I have had the chance to work on many group projects in collaboration with Immunize.io and BCIT's School of Nursing. In my free time, I also like to incorporate my own interests and hobbies into my personal projects.<br/><br/>

                                I am excited to step into the industry and continue my learning with front-end, back-end, and full-stack positions!
                            </Card.Text>
                        </Card.Body>
                    </Col>
                    <Col md={4} className="d-flex justify-content-end align-items-center">
                        <Card.Img className="img-fluid mt-5" src={require("../assets/images/me.jpg")} alt="Christopher Mok" style={{ width: '275px', maxWidth: '100%' }} />
                    </Col>
                    {/* <SkillsSection /> */}
                </Row>
                <SkillsSection />
            </Card>
            
        </Container>
    );
};


export default About;