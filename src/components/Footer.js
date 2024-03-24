import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { SocialIcon } from "react-social-icons";
const Footer = () => {
    return (
        <Container fluid className="App-footer ">
            <Row>
                <Col className="mt-2">
                   My Web &copy; 2023
                </Col>
            </Row>

            <Row>
                <Col>
                    <SocialIcon
                        network="instagram"
                        url="https://www.instagram.com/"
                        style={{ height: 30, width: 30, margin: 10 }}
                    />
                    <SocialIcon
                        network="twitter"
                        url="https://twitter.com/"
                        style={{ height: 30, width: 30, margin: 10 }}
                    />
                    <SocialIcon
                        network="google"
                        url="https://www.google.com/"
                        style={{ height: 30, width: 30, margin: 10 }}
                    />
                    <SocialIcon
                        network="facebook"
                        url="https://www.facebook.com/"
                        style={{ height: 30, width: 30, margin: 10 }}
                    />
                </Col>
            </Row>

        </Container>

    );
};
export default Footer;