import React from 'react';
import Row from 'react-bootstrap/Row';
import GuideCard from './GuideCard';

function GuideGrid({ guides }) {
  return (
    <Row xs={1} md={2} className="g-4">
      {guides.map((guide, idx) => (
        <GuideCard key={idx} guide={guide} />
      ))}
    </Row>
  );
}

export default GuideGrid;
