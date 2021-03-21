import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Book/Book.css";
import GoogleMap from "../GoogleMap/GoogleMap";

const Book = () => {
  return (
    <Container>
      <Row>
        <Col md={6} sm={12} xs={12}>
          <Form className="bg-dark text-white p-5 border border-white shadow rounded">
            <Form.Group controlId="formGroupText">
              <Form.Label>Pick from</Form.Label>
              <Form.Control type="text" placeholder="Mirpur 1" />
            </Form.Group>

            <Form.Group controlId="formGroupText">
              <Form.Label>Pick to</Form.Label>
              <Form.Control type="text" placeholder="Dhanmondi" />
            </Form.Group>
            <Button className="btn-block" variant="primary" type="button" onClick="heandleSearch">
              Search
            </Button>
          </Form>
        </Col>
        <Col md={6} sm={12} xs={12}>
          <GoogleMap></GoogleMap>
        </Col>
      </Row>
    </Container>
  );
};

export default Book;
