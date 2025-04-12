
import React from 'react';

const AppHeader: React.FC = () => {
  return (
    <header className="w-full p-6 bg-gradient-to-r from-purple-700 to-indigo-800 text-white">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center">Social Widget Hub</h1>
        <p className="text-center mt-2 text-purple-100">
          Access all your favorite social media apps in one place
        </p>
      </div>
    </header>
  );
};

export default AppHeader;
