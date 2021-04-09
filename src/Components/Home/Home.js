import React, { useEffect, useState } from "react";
import {Col, Container, Row } from "react-bootstrap";
import "../Home/Home.css";
import Shop from "../Shop/Shop";

const Home = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/events', {
      method: 'GET'
    })
    .then(res => res.json())
    .then(data => setEvents(data))
   
  }, []);
  
  return (
    <div className="home-bg">
        <Container>
          <Row>
            {events.map((event) => (
              <Col md={3} sm={12} xs={12}>
                <Shop id={event._id} events={event}></Shop>
              </Col>
            ))}
          </Row>
        </Container>
    </div>
  );
};

export default Home;
