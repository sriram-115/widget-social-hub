
import React, { useState } from 'react';
import SocialWidget from './SocialWidget';

type SocialApp = 'whatsapp' | 'instagram' | 'facebook';

const WidgetGrid: React.FC = () => {
  const [activeApp, setActiveApp] = useState<SocialApp | null>(null);

  const handleWidgetClick = (app: SocialApp) => {
    setActiveApp(app);
    
    // In a real app, you might want to launch the app or navigate to it
    console.log(`Opening ${app}...`);
  };

  return (
    <div className="w-full px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SocialWidget 
          app="whatsapp" 
          onClick={() => handleWidgetClick('whatsapp')} 
          isActive={activeApp === 'whatsapp'} 
        />
        <SocialWidget 
          app="instagram" 
          onClick={() => handleWidgetClick('instagram')} 
          isActive={activeApp === 'instagram'} 
        />
        <SocialWidget 
          app="facebook" 
          onClick={() => handleWidgetClick('facebook')} 
          isActive={activeApp === 'facebook'} 
        />
      </div>
      
      {activeApp && (
        <div className="mt-8 p-6 bg-white rounded-xl shadow-lg animate-fade-in">
          <h2 className="text-2xl font-bold mb-4 text-center capitalize">
            {activeApp} Widget
          </h2>
          <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg">
            <p className="text-gray-500">
              This is where the {activeApp} widget content would appear.
              <br />
              In a full implementation, this would embed or link to the actual app.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WidgetGrid;
