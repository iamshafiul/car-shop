import React, { useEffect, useState } from "react";
import {Col, Container, Row } from "react-bootstrap";
import "../Home/Home.css";
import Transfort from "../Transfort/Transfort";
import uberData from '../../data/data.json';

const Home = () => {
  const [transfort, setTransfort] = useState([]);
  useEffect(() => {
   setTransfort(uberData);
  }, []);
  return (
    <div className="home-bg">
        <Container>
          <Row>
            {transfort.map((transfort) => (
              <Col md={3} sm={12} xs={12}>
                <Transfort key={transfort.id} transfort={transfort}></Transfort>
              </Col>
            ))}
          </Row>
        </Container>
    </div>
  );
};

export default Home;
