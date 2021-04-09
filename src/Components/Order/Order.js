import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Order.css";

const Order = () => {
  return (
    <Container>
      <Row>
        <Col md={12} sm={12} xs={12}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan="2">Total</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
          <Button>checkout</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Order;
