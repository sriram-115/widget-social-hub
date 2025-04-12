
import React, { useState } from 'react';
import SocialWidget from './SocialWidget';
import { toast } from '@/components/ui/use-toast';

type SocialApp = 'whatsapp' | 'instagram' | 'facebook';

const WidgetGrid: React.FC = () => {
  const [activeApp, setActiveApp] = useState<SocialApp | null>(null);

  const handleWidgetClick = (app: SocialApp) => {
    setActiveApp(app);
    
    let appUrl = '';
    switch (app) {
      case 'whatsapp':
        appUrl = 'whatsapp://';
        break;
      case 'instagram':
        appUrl = 'instagram://';
        break;
      case 'facebook':
        appUrl = 'fb://';
        break;
    }
    
    console.log(`Opening ${app} app with URL: ${appUrl}`);
    toast({
      title: `Opening ${app}`,
      description: "Launching native app...",
      duration: 2000,
    });
    
    // For web testing only - will attempt to open app if installed
    window.location.href = appUrl;
    
    // Fallback for web testing - if app doesn't open in 1 second, redirect to website
    setTimeout(() => {
      const webUrls: Record<SocialApp, string> = {
        whatsapp: 'https://web.whatsapp.com/',
        instagram: 'https://www.instagram.com/',
        facebook: 'https://www.facebook.com/'
      };
      
      // Check if we're still on the same page (app didn't open)
      if (document.visibilityState !== 'hidden') {
        window.location.href = webUrls[app];
      }
    }, 1000);
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
    </div>
  );
};

export default WidgetGrid;
