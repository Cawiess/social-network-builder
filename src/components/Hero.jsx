import React from 'react';

const HeroSection = ({ onDocumentClick }) => {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#0a0f1f' }}>
      <div className="text-center">
        {/* Clickable Document Icon */}
        <div
          className="cursor-pointer inline-block p-4 rounded-lg transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
          onClick={onDocumentClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg" 
            className="h-24 w-24 text-gray-200"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <path d="M14 2v6h6" />
          </svg>
        </div>
        <h1 className="mt-4 text-4xl font-bold text-gray-100">
          Upload Your Narrative
        </h1>
        <p className="mt-2 text-lg text-gray-400">
          Click the document icon to start building your network.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;



