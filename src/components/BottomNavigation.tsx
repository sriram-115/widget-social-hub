
import React from 'react';
import { Facebook, Instagram } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from '@/components/ui/use-toast';

// Custom WhatsApp icon since it's not included in lucide-react core set
const WhatsApp = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
    <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
    <path d="M9.5 13.5c.5 1.5 2.5 2 3.5 1" />
  </svg>
);

type SocialApp = 'whatsapp' | 'instagram' | 'facebook';

interface BottomNavigationProps {
  activeApp: SocialApp | null;
  onAppSelect: (app: SocialApp) => void;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({ activeApp, onAppSelect }) => {
  const openExternalApp = (app: SocialApp) => {
    onAppSelect(app);
    
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
    
    // This will be replaced with Capacitor's App Launcher in a real mobile app
    console.log(`Opening ${app} app with URL: ${appUrl}`);
    toast({
      title: `Opening ${app}`,
      description: "Launching native app...",
      duration: 2000,
    });
    
    // In a full implementation with Capacitor:
    // import { App } from '@capacitor/app';
    // App.openUrl({ url: appUrl });
    
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
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200">
      <div className="flex justify-around items-center h-16">
        <button 
          onClick={() => openExternalApp('whatsapp')} 
          className={cn(
            "flex flex-col items-center justify-center w-full h-full transition-colors",
            activeApp === 'whatsapp' ? 'text-green-600' : 'text-gray-500'
          )}
        >
          <WhatsApp />
          <span className="text-xs mt-1">WhatsApp</span>
        </button>
        
        <button 
          onClick={() => openExternalApp('instagram')} 
          className={cn(
            "flex flex-col items-center justify-center w-full h-full transition-colors",
            activeApp === 'instagram' ? 'text-pink-600' : 'text-gray-500'
          )}
        >
          <Instagram />
          <span className="text-xs mt-1">Instagram</span>
        </button>
        
        <button 
          onClick={() => openExternalApp('facebook')} 
          className={cn(
            "flex flex-col items-center justify-center w-full h-full transition-colors",
            activeApp === 'facebook' ? 'text-blue-600' : 'text-gray-500'
          )}
        >
          <Facebook />
          <span className="text-xs mt-1">Facebook</span>
        </button>
      </div>
    </div>
  );
};

export default BottomNavigation;
