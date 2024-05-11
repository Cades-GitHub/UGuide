import React, { useState, useEffect } from 'react';
// import guideModel from "./models/guideModel"; // Import the guideModel module
import GuideCard from './GuideCard';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_GUIDES } from '../utils/queries';


const Guides = () => {
  const { loading, data } = useQuery(QUERY_ALL_GUIDES);
  // const [guides, setGuides] = useState([]);

  const guides = data?.guides || [];

  // useEffect(() => {
  //   // Fetch guides from the guideModel
  //   guideModel.find()
  //     .then(data => {
  //       setGuides(data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching guides:', error);
  //     });
  // }, []);

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  console.log('GUIDES', guides);

  return (
    <div>
      <h1 style= {{
        fontSize: 'larger',
        textAlign: 'center',
        textDecoration: 'underline',
      }}>Guides</h1>
      { guides.length === 0 ? (
        <div>No guides available</div>
      ) : (
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          position: 'relative',
          right: '-50px',
      
        }}>
          { guides.map(guide => (
            <GuideCard key={ guide._id } guide={ guide } />
          )) }
        </div>
      ) }
    </div>
  );
};

export default Guides;
