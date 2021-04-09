import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Shop.css";
import { useHistory } from "react-router-dom";

const deleteProduct = (product_id) => {
  if(product_id) {
    fetch(`http://localhost:5000/events/${product_id}`, {
      method: 'DELETE'
    });
  }
};

const Shop = (props) => {
  const { name, imageURL, price, _id } = props.events;
 
  return (
    <div>
      <Card className="mb-3 text-center p-2">
        <Card.Img variant="top" src={imageURL} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{price}</Card.Subtitle>
          
          <Button className="btn btn-info buyBtn" as={Link} to={`/product/${_id}`}> Buy Now</Button>
          <Button className="btn btn-info btn-delete" onClick={() => deleteProduct(_id)}> Delete</Button>
         
        </Card.Body>
      </Card>
    </div>
  );
};

export default Shop;
