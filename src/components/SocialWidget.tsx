
import React from 'react';
import { Facebook, Instagram } from 'lucide-react';
import { cn } from '@/lib/utils';

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

interface SocialWidgetProps {
  app: SocialApp;
  onClick: () => void;
  isActive: boolean;
}

const SocialWidget: React.FC<SocialWidgetProps> = ({ app, onClick, isActive }) => {
  const getIcon = () => {
    switch (app) {
      case 'whatsapp':
        return <WhatsApp />;
      case 'instagram':
        return <Instagram />;
      case 'facebook':
        return <Facebook />;
      default:
        return null;
    }
  };

  const getAppName = () => {
    switch (app) {
      case 'whatsapp':
        return 'WhatsApp';
      case 'instagram':
        return 'Instagram';
      case 'facebook':
        return 'Facebook';
      default:
        return '';
    }
  };

  const getAppColor = () => {
    switch (app) {
      case 'whatsapp':
        return 'bg-gradient-to-br from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 active:from-green-600 active:to-green-800';
      case 'instagram':
        return 'bg-gradient-to-br from-pink-500 via-purple-500 to-yellow-500 hover:from-pink-600 hover:via-purple-600 hover:to-yellow-600 active:from-pink-700 active:via-purple-700 active:to-yellow-700';
      case 'facebook':
        return 'bg-gradient-to-br from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 active:from-blue-700 active:to-blue-900';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div 
      className={cn(
        'relative rounded-xl p-3 transition-all duration-150 cursor-pointer transform active:scale-95',
        getAppColor(),
        isActive ? 'ring-2 ring-white ring-opacity-60 scale-105' : ''
      )}
      onClick={onClick}
    >
      <div className="flex flex-col items-center text-white">
        <div className="text-3xl mb-1">
          {getIcon()}
        </div>
        <h3 className="text-sm font-semibold">{getAppName()}</h3>
        {isActive && (
          <div className="mt-1 animate-pulse text-xs">Active</div>
        )}
      </div>
    </div>
  );
};

export default SocialWidget;
