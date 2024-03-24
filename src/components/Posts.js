import React from 'react'
import PostItem from "./PostItem";
import { Container, Row, Col } from 'react-bootstrap';

function Posts() {
    return (
        <Container>
            <div className="flex-container">
                <Row>
                    <Col md={3}>
                        <PostItem
                            imageUrl="./images/MywebImage1.png"
                            title="Hello World 1"
                            content="This is content of Hello World."
                            message="This is content of Hello World This is content of Hello World This is content of Hello World"
                        />
                    </Col>
                    <Col md={3}>
                        <PostItem
                            imageUrl="./images/MywebImage1.png"
                            title="Hello World 2"
                            content="This is content of Goodbye."
                            message="This is content of Hello World This is content of Hello World This is content of Hello World"
                        />
                    </Col>
                    <Col md={3}>
                        <PostItem
                            imageUrl="./images/MywebImage1.png"
                            title="Hello World 3"
                            content="This is content of Hello World."
                            message="This is content of Hello World This is content of Hello World This is content of Hello World"
                        />
                    </Col>
                    <Col md={3}>
                        <PostItem
                            imageUrl="./images/MywebImage1.png"
                            title="Hello World 4"
                            content="This is content of Hello World."
                            message="This is content of Hello World This is content of Hello World This is content of Hello World"
                        />
                    </Col>
                    <Col md={3}>
                        <PostItem
                            imageUrl="./images/MywebImage1.png"
                            title="Hello World 5"
                            content="This is content of Hello World."
                            message="This is content of Hello World This is content of Hello World This is content of Hello World"
                        />
                    </Col>
                    <Col md={3}>
                        <PostItem
                            imageUrl="./images/MywebImage1.png"
                            title="Hello World 6"
                            content="This is content of Hello World."
                        />
                    </Col>
                    <Col md={3}>
                        <PostItem
                            imageUrl="./images/MywebImage1.png"
                            title="Hello World 7"
                            content="This is content of Hello World."
                        />
                    </Col>
                    <Col md={3}>
                        <PostItem
                            imageUrl="./images/MywebImage1.png"
                            title="Hello World 8"
                            content="This is content of Hello World."
                        />
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default Posts