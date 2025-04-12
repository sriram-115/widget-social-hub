
import React from 'react';
import AppHeader from '@/components/AppHeader';
import WidgetGrid from '@/components/WidgetGrid';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      <AppHeader />
      <main className="container mx-auto py-4 px-4">
        <div className="mx-auto">
          <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg p-4">
            <h2 className="text-xl font-semibold mb-3 text-gray-800">Your Social Apps</h2>
            <p className="text-gray-600 mb-4 text-sm">
              Tap on any app below to open it.
            </p>
            <WidgetGrid />
          </div>
        </div>
      </main>
      <footer className="container mx-auto py-4 text-center text-gray-500 text-xs">
        <p>© 2025 Social Widget Hub</p>
      </footer>
    </div>
  );
};

export default Index;
