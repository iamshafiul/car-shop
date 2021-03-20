import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Book/Book.css";
import map from "../../images/Map.png";

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

            <Link to="/bookInfo" className="text-white text-decoration-none">
              <Button className="btn-block" variant="primary" type="submit">
                Submit
              </Button>
            </Link>
          </Form>
        </Col>
        <Col md={6} sm={12} xs={12}>
          <img src={map} alt="" />
        </Col>
      </Row>
      ;
    </Container>
  );
};

export default Book;
