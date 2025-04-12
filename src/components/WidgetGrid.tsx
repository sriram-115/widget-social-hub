
import React from 'react';
import SocialWidget from './SocialWidget';
import { toast } from '@/components/ui/use-toast';

type SocialApp = 'whatsapp' | 'instagram' | 'facebook';

interface WidgetGridProps {
  activeApp: SocialApp | null;
  onAppSelect: (app: SocialApp) => void;
}

const WidgetGrid: React.FC<WidgetGridProps> = ({ activeApp, onAppSelect }) => {
  const handleWidgetClick = (app: SocialApp) => {
    onAppSelect(app);
    
    toast({
      title: `Switched to ${app}`,
      description: "Now viewing app content",
      duration: 2000,
    });
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
