import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({ jsonpack }) => {
  const itemid = jsonpack.categoryId;
  return (
    <>
      <Card border="light" bg="dark" className="mb-2">
        <Card.Header>
          <Card.Img variant="top" src={jsonpack.imageId} />
        </Card.Header>
        <Card.Body>
          <Link to={`/item/${itemid}`} className="text-center">
            <Card.Link className="text-center">
              {jsonpack.title}
            </Card.Link>
          </Link>
            <Card.Subtitle className="mb-2 text-muted text-center">
              Precio:{jsonpack.price}
            </Card.Subtitle>
          <Card.Text>
            <p>Descripción {jsonpack.description}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Item;
