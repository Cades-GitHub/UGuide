import React from 'react';

const GuideCard = ({ guide }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h3 className="text-lg font-semibold mb-2">{guide.title}</h3>
      <p className="text-gray-600 mb-4">{guide.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-gray-500">{guide.author}</span>
        <span className="text-gray-500">{guide.createdAt}</span>
      </div>
    </div>
  );
};

export default GuideCard;
