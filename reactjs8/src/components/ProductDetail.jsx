import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { data } from './data';
import { Container, Card, Button } from 'react-bootstrap';

const ProductDetail = () => {
  const { id } = useParams();
  const product = data.find((item) => item.id === parseInt(id));

  return (
    <Container className="mt-4">
      {product ? (
        <Card>
          <Card.Img variant="top" src={product.image} height="400px" style={{ objectFit: 'contain' }} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text><strong>Category:</strong> {product.category}</Card.Text>
            <Card.Text><strong>Description:</strong> {product.description}</Card.Text>
            <Card.Text><strong>Price:</strong> ${product.price}</Card.Text>
            <Card.Text><strong>Rating:</strong> {product.rating.rate} ({product.rating.count} reviews)</Card.Text>
            <Link to="/">
              <Button variant="secondary">Back to Home</Button>
            </Link>
          </Card.Body>
        </Card>
      ) : (
        <h4>Product not found</h4>
      )}
    </Container>
  );
};

export default ProductDetail;