import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

function GuideCard({ guide }) {
  return (
    <Col xs={12} sm={6} md={4} lg={3}> {/* Adjust the column width */}
      <div style={{ display: 'flex', flexWrap: 'wrap' }}> {/* Apply flex styles to the parent div */}
        <Card style={{ width: '18rem', margin: '0.5rem' }}> {/* Adjust the card width */}
          <Card.Img variant="top" src={guide.imageUrl} />
          <Card.Body>
            <Card.Title>{guide.title}</Card.Title>
            <Card.Text>{guide.description}</Card.Text>
          </Card.Body>
          <Card.Footer className="d-flex justify-content-center">
            <a href={guide.videoUrl} className="btn btn-primary btn-sm">Watch Video</a>
          </Card.Footer>
        </Card>
      </div>
    </Col>
  );
}

export default GuideCard;
