import React from 'react';
import Header from '../components/Header';
import GridExample from '../components/GridExample';

const HomePage = () => {
    return (
        <div>
            <Header />
            <div>
                <h1>Welcome to the Home Page</h1>
                <p>This is the homepage of our website.</p>
            </div>
            <GridExample />
        </div>
    );
};

export default HomePage;
