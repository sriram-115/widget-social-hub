
import React, { useState } from 'react';
import SocialWidget from './SocialWidget';
import { toast } from '@/components/ui/use-toast';

type SocialApp = 'whatsapp' | 'instagram' | 'facebook';

const WidgetGrid: React.FC = () => {
  const [activeApp, setActiveApp] = useState<SocialApp | null>(null);

  const handleWidgetClick = (app: SocialApp) => {
    setActiveApp(app);
    
    // In a real mobile app, this would launch the native app
    console.log(`Opening ${app}...`);
    toast({
      title: `Opening ${app}`,
      description: "Launching external application...",
      duration: 2000,
    });
    
    // For a full implementation, this would use Capacitor plugins to open the app
    // Example: Capacitor.Plugins.AppLauncher.openUrl({ url: 'whatsapp://' });
  };

  return (
    <div className="w-full px-2 py-4">
      <div className="grid grid-cols-3 gap-3">
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
        <div className="mt-6 p-4 bg-white rounded-xl shadow-lg animate-fade-in">
          <h2 className="text-xl font-bold mb-3 text-center capitalize">
            {activeApp}
          </h2>
          <div className="h-48 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg">
            <p className="text-gray-500 text-center text-sm px-2">
              Tapping this would open the {activeApp} app on your device.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WidgetGrid;
