import React, { useState } from 'react';
import AppHeader from '@/components/AppHeader';
import BottomNavigation from '@/components/BottomNavigation';
import { toast } from '@/components/ui/use-toast';
import { Facebook, Instagram } from 'lucide-react';

type SocialApp = 'whatsapp' | 'instagram' | 'facebook';

const Index: React.FC = () => {
  const [activeApp, setActiveApp] = useState<SocialApp | null>(null);

  const handleAppSelect = (app: SocialApp) => {
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
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 pb-16">
      <AppHeader />
      <main className="container mx-auto py-4 px-4">
        {!activeApp ? (
          <div className="mx-auto">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg p-4">
              <h2 className="text-xl font-semibold mb-3 text-gray-800">Your Social Apps</h2>
              <p className="text-gray-600 mb-4 text-sm">
                Tap on any app below to open it.
              </p>
              <div className="grid grid-cols-3 gap-3">
                {['whatsapp', 'instagram', 'facebook'].map((app) => (
                  <AppCard 
                    key={app} 
                    app={app as SocialApp} 
                    onClick={() => handleAppSelect(app as SocialApp)} 
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <AppContent app={activeApp} />
        )}
      </main>
      <BottomNavigation activeApp={activeApp} onAppSelect={handleAppSelect} />
      <footer className="container mx-auto py-4 text-center text-gray-500 text-xs">
        <p>© 2025 Social Widget Hub</p>
      </footer>
    </div>
  );
};

// App Card component for the grid
const AppCard: React.FC<{ app: SocialApp; onClick: () => void }> = ({ app, onClick }) => {
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

  const getIcon = () => {
    switch (app) {
      case 'whatsapp':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
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
      case 'instagram':
        return <Instagram size={36} />;
      case 'facebook':
        return <Facebook size={36} />;
      default:
        return null;
    }
  };

  return (
    <div 
      className={`relative rounded-xl p-4 transition-all duration-150 cursor-pointer transform active:scale-95 ${getAppColor()}`}
      onClick={onClick}
    >
      <div className="flex flex-col items-center text-white">
        <div className="mb-2">
          {getIcon()}
        </div>
        <h3 className="text-sm font-semibold capitalize">{app}</h3>
      </div>
    </div>
  );
};

// App content to display when an app is selected
const AppContent: React.FC<{ app: SocialApp }> = ({ app }) => {
  const getAppContent = () => {
    switch (app) {
      case 'whatsapp':
        return (
          <div className="bg-green-50 p-4 rounded-xl">
            <h2 className="text-xl font-bold mb-4 text-green-800">WhatsApp</h2>
            <div className="space-y-3">
              <ChatPreview name="Family Group" message="Mom: What's for dinner?" time="12:30 PM" unread={2} />
              <ChatPreview name="Work Team" message="Boss: Meeting at 3pm" time="10:15 AM" unread={5} />
              <ChatPreview name="John Doe" message="See you tomorrow!" time="Yesterday" />
              <ChatPreview name="Jane Smith" message="Thanks for the help!" time="Yesterday" />
            </div>
          </div>
        );
      case 'instagram':
        return (
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl">
            <h2 className="text-xl font-bold mb-4 text-purple-800">Instagram</h2>
            <div className="space-y-4">
              <StoryCircles />
              <PostPreview username="travel_lover" likes="1,243" comments="87" />
              <PostPreview username="food_pics" likes="879" comments="56" />
              <PostPreview username="nature_photography" likes="2,389" comments="134" />
            </div>
          </div>
        );
      case 'facebook':
        return (
          <div className="bg-blue-50 p-4 rounded-xl">
            <h2 className="text-xl font-bold mb-4 text-blue-800">Facebook</h2>
            <div className="space-y-4">
              <FBPostPreview name="Sarah Johnson" time="2 hours ago" likes="43" comments="12" shares="5" />
              <FBPostPreview name="Tech News Group" time="5 hours ago" likes="128" comments="37" shares="22" />
              <FBPostPreview name="Local Community" time="Yesterday" likes="76" comments="19" shares="8" />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg p-4 animate-fade-in">
      {getAppContent()}
    </div>
  );
};

// WhatsApp UI components
const ChatPreview: React.FC<{ name: string; message: string; time: string; unread?: number }> = ({ name, message, time, unread }) => (
  <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
    <div className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0"></div>
    <div className="ml-3 flex-grow">
      <div className="flex justify-between">
        <h3 className="font-semibold text-gray-800">{name}</h3>
        <span className="text-xs text-gray-500">{time}</span>
      </div>
      <p className="text-sm text-gray-600 truncate">{message}</p>
    </div>
    {unread && (
      <div className="ml-2 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
        {unread}
      </div>
    )}
  </div>
);

// Instagram UI components
const StoryCircles: React.FC = () => (
  <div className="flex space-x-4 overflow-x-auto py-2">
    {['Your Story', 'friend1', 'friend2', 'friend3', 'friend4'].map((name, i) => (
      <div key={i} className="flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-yellow-400 to-pink-600 p-[2px]">
          <div className="w-full h-full rounded-full bg-gray-200 border-2 border-white"></div>
        </div>
        <span className="text-xs mt-1 truncate w-16 text-center">{name}</span>
      </div>
    ))}
  </div>
);

const PostPreview: React.FC<{ username: string; likes: string; comments: string }> = ({ username, likes, comments }) => (
  <div className="bg-white rounded-md shadow">
    <div className="p-3 flex items-center">
      <div className="w-8 h-8 rounded-full bg-gray-300"></div>
      <span className="ml-2 font-medium text-sm">{username}</span>
    </div>
    <div className="aspect-square bg-gray-200 w-full"></div>
    <div className="p-3">
      <div className="flex space-x-4 mb-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
      </div>
      <p className="text-sm font-medium">{likes} likes</p>
      <p className="text-sm"><span className="font-medium">{username}</span> <span className="text-gray-700">Check out this amazing post!</span></p>
      <p className="text-sm text-gray-500">View all {comments} comments</p>
    </div>
  </div>
);

// Facebook UI components
const FBPostPreview: React.FC<{ name: string; time: string; likes: string; comments: string; shares: string }> = ({ name, time, likes, comments, shares }) => (
  <div className="bg-white rounded-lg shadow">
    <div className="p-4">
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-gray-300"></div>
        <div className="ml-3">
          <p className="font-medium">{name}</p>
          <p className="text-xs text-gray-500">{time}</p>
        </div>
      </div>
      <p className="mt-3 text-gray-800">This is a sample Facebook post content. It could contain text, links, and more.</p>
      <div className="mt-4 aspect-video bg-gray-200 rounded"></div>
      <div className="mt-3 border-t border-b border-gray-200 py-1">
        <div className="flex justify-between text-gray-500 text-sm">
          <span>👍 {likes}</span>
          <span>💬 {comments}</span>
          <span>↗️ {shares}</span>
        </div>
      </div>
      <div className="flex justify-between mt-3">
        <button className="flex items-center text-gray-600 text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
          </svg>
          Like
        </button>
        <button className="flex items-center text-gray-600 text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          Comment
        </button>
        <button className="flex items-center text-gray-600 text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
          Share
        </button>
      </div>
    </div>
  </div>
);

export default Index;
