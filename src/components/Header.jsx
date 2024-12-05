import React from 'react';
import { Search, Heart, SendHorizontal, PlusSquare, Compass, Home, Menu, MonitorPlay} from 'lucide-react';

export default function Header() {
  return (
    <>
      {/* Desktop Sidebar */}
      <header className="hidden md:flex fixed left-0 top-0 h-screen w-[220px] border-r border-zinc-800 bg-black p-4 flex-col">
        {/* <div className="py-4 mb-6">
          <Instagram className="w-8 h-8 text-white" />
        </div> */}
        <img
            src="https://www.logo.wine/a/logo/Instagram/Instagram-Wordmark-Logo.wine.svg"
            alt="Instagram"
            className="font-bold"
          />
        <nav className="flex-1">
          <div className="space-y-2">
            <button className="flex items-center space-x-4 p-3 w-full hover:bg-zinc-900 rounded-lg text-white">
              <Home className="w-6 h-6" />
              <span className="font-medium">Home</span>
            </button>
            
            <button className="flex items-center space-x-4 p-3 w-full hover:bg-zinc-900 rounded-lg text-white">
              <Search className="w-6 h-6" />
              <span className="font-medium">Search</span>
            </button>
            
            <button className="flex items-center space-x-4 p-3 w-full hover:bg-zinc-900 rounded-lg text-white">
              <Compass className="w-6 h-6" />
              <span className="font-medium">Explore</span>
            </button>
            
            <button className="flex items-center space-x-4 p-3 w-full hover:bg-zinc-900 rounded-lg text-white">
              <MonitorPlay className="w-6 h-6" />
              <span className="font-medium">Reels</span>
            </button>
            
            <button className="flex items-center space-x-4 p-3 w-full hover:bg-zinc-900 rounded-lg text-white">
              <SendHorizontal className="w-6 h-6" />
              <span className="font-medium">Messages</span>
            </button>
            
            <button className="flex items-center space-x-4 p-3 w-full hover:bg-zinc-900 rounded-lg text-white">
              <Heart className="w-6 h-6" />
              <span className="font-medium">Notifications</span>
            </button>
            
            <button className="flex items-center space-x-4 p-3 w-full hover:bg-zinc-900 rounded-lg text-white">
              <PlusSquare className="w-6 h-6" />
              <span className="font-medium">Create</span>
            </button>
            
            <button className="flex items-center space-x-4 p-3 w-full hover:bg-zinc-900 rounded-lg text-white">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
                alt="Profile"
                className="w-6 h-6 rounded-full"
              />
              <span className="font-medium">Profile</span>
            </button>
          </div>
        </nav>
        
        <button className="flex items-center space-x-4 p-3 w-full hover:bg-zinc-900 rounded-lg text-white">
          <Menu className="w-6 h-6" />
          <span className="font-medium">More</span>
        </button>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-black border-t border-zinc-800 px-4 py-3">
        <div className="flex justify-around items-center">
          <Home className="w-6 h-6 text-white" />
          <Compass className="w-6 h-6 text-white" />
          <MonitorPlay className="w-6 h-6 text-white" />
          <PlusSquare className="w-6 h-6 text-white" />
          <SendHorizontal className="w-6 h-6 text-white"/>
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
            alt="Profile"
            className="w-6 h-6 rounded-full"
          />
        </div>
      </nav>
    </>
  );
}