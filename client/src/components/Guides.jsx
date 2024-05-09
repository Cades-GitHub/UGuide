import React, { useState, useEffect } from 'react';
import guideModel from "./models/guideModel"; // Import the guideModel module

const Guides = () => {
  const [guides, setGuides] = useState([]);

  useEffect(() => {
    // Fetch guides from the guideModel
    guideModel.find()
      .then(data => {
        setGuides(data);
      })
      .catch(error => {
        console.error('Error fetching guides:', error);
      });
  }, []);

  return (
    <div>
      <h1>Guides</h1>
      {guides.length === 0 ? (
        <div>No guides available</div>
      ) : (
        <div>
          {guides.map(guide => (
            <Guide key={guide._id} guide={guide} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Guides;
