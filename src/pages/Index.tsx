
import React from 'react';
import AppHeader from '@/components/AppHeader';
import WidgetGrid from '@/components/WidgetGrid';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      <AppHeader />
      <main className="container mx-auto py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Your Social Widgets</h2>
            <p className="text-gray-600 mb-6">
              Click on any widget below to activate it. In a full implementation, 
              this would open the respective app or embed its functionality.
            </p>
            <WidgetGrid />
          </div>
        </div>
      </main>
      <footer className="container mx-auto py-6 text-center text-gray-500">
        <p>© 2025 Social Widget Hub. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
