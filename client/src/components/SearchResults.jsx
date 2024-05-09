import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const SearchResults = ({ results }) => {
  return (
    <Container>
      <h2>Search Results</h2>
      <Row>
        {results.map((result, index) => (
          <Col key={index} sm={6} md={4} lg={3}>
            {/* Render each search result item */}
            <div>{result.title}</div>
            <div>{result.description}</div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SearchResults;
