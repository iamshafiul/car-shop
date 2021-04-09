import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Col, Container, Row, Table } from "react-bootstrap";

const CheckOut = () => {
    const { productKey } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/events/${productKey}`
      fetch(url)
  
      .then(res => res.json())
      .then(data => setProduct(data))
     
    }, []);
  
    const pd = product.find(pd =>pd._id === productKey)
    console.log(pd)
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
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default CheckOut;



app.get("/event/:id",(req, res)=>{
  eventCollection.find({_id:ObjectID(req.params.id)})
  .toArray((error,event)=>{
    res.send(event[0])
  })
})