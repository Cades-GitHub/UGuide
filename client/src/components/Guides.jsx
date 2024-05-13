import React, { useEffect, useState } from 'react';
import GlobalApi from './GlobalApi';

const Guides = () => {
  const [allGamesList, setAllGamesList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    // Fetch all games when component mounts
    const fetchAllGames = async () => {
      try {
        const api = GlobalApi();
        const response = await api.getAllGames(currentPage);
        setAllGamesList(response.data.results);
        setTotalPages(response.data.total_pages);
      } catch (error) {
        console.error('Error fetching games:', error);
      }
    };

    fetchAllGames(); // Call the function to fetch all games
  }, [currentPage]); // Run this effect whenever currentPage changes

  const handleNextPage = () => {
    // Increment currentPage if it's less than totalPages
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      {allGamesList.length === 0 ? (
        <h2>LOADING...</h2>
      ) : (
        <div>
          <h1
            style={{
              fontSize: 'larger',
              textAlign: 'center',
              textDecoration: 'underline',
            }}
          >
            Guides
          </h1>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              position: 'relative',
              right: '-50px',
            }}
          >
            {allGamesList.map((game) => (
              <div
                key={game.id}
                style={{
                  border: '1px solid black',
                  margin: '10px',
                  padding: '10px',
                  width: '200px',
                }}
              >
                <img
                  src={game.background_image}
                  alt={game.name}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                  }}
                />
                <h3>{game.name}</h3>
                <p>Released: {game.released}</p>
                <p>Rating: {game.rating}</p>
              </div>
            ))}
          </div>
          {/* Next page button */}
          {currentPage < totalPages && (
            <button onClick={handleNextPage}>Next Page</button>
          )}
        </div>
      )}
    </div>
  );
};

export default Guides;


// const Guides = () => {
//   const { loading, data } = useQuery(QUERY_ALL_GUIDES);
//   // const [guides, setGuides] = useState([]);

//   const guides = data?.guides || [];

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

//   if (loading) {
//     return <h2>LOADING...</h2>;
//   }

//   console.log('GUIDES', guides);

//   return (
//     <div>
//       <h1 style= {{
//         fontSize: 'larger',
//         textAlign: 'center',
//         textDecoration: 'underline',
//       }}>Guides</h1>
//       { guides.length === 0 ? (
//         <div>No guides available</div>
//       ) : (
//         <div style={{
//           display: 'flex',
//           flexWrap: 'wrap',
//           position: 'relative',
//           right: '-50px',
      
//         }}>
//           { guides.map(guide => (
//             <GuideCard key={ guide._id } guide={ guide } />
//           )) }
//         </div>
//       ) }
//     </div>
//   );
// };


