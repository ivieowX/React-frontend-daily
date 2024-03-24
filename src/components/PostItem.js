import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';

function PostItem(props) {
    const [showA, setShowA] = useState(false);
    const toggleShowA = () => setShowA(!showA);
    const imageAltText = `Illustration for ${props.title}`;

    return (
        <Container>
            <div className="flex-container mt-3 mb-3">
                <Card style={{ position: "relative" }}>
                    <Card.Img variant="top" />
                    {props.imageUrl && (
                        <img
                            src={props.imageUrl}
                            className="card-img-top"
                            style={{ maxWidth: "100%", height: "auto", maxHeight: "100%" }}
                            alt={imageAltText}
                        />
                    )}
                    <Card.Body>
                        <Card.Title>
                            <h3 className="card-title">{props.title}</h3>
                        </Card.Title>
                        <Card.Text>
                            <p className="card-text">{props.content}</p>
                        </Card.Text>
                        <Button onClick={toggleShowA} variant="primary">Go somewhere</Button>
                    </Card.Body>
                    <Toast show={showA} onClose={toggleShowA} style={{ position: "absolute" }}>
                        <Toast.Header>
                            <strong className="me-auto">{props.title}</strong>
                            <small>11 mins ago</small>
                        </Toast.Header>
                        <p style={{ padding: "1rem" }}>{props.message}</p>
                    </Toast>
                </Card>
            </div>
        </Container>
    );
}

export default PostItem;
