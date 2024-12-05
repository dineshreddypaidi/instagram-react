import React from 'react';


const stories = [
  { id: 1, username: 'your_story', image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde', isUser: true },
  { id: 2, username: 'john.doe', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330' },
  { id: 3, username: 'travel_diary', image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop' },
  { id: 4, username: 'photography', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop' },
  { id: 5, username: 'foodie', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop' },
  { id: 6, username: 'your_story', image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop', isUser: true },
  { id: 7, username: 'john.doe', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop' },
  { id: 8, username: 'travel_diary', image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop' },
  { id: 9, username: 'photography', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop' },
  { id: 10, username: 'foodie', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop' },
];

export default function Stories() {
  return (
    <div className="flex space-x-4 bg-neutral-900 p-4 rounded-lg border border-zinc-950 overflow-x-auto scrollbar-hide">
      {stories.map((story) => (
        <div key={story.id} className="flex flex-col items-center space-y-1 flex-shrink-0">
          <div className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr from-yellow-400 to-pink-600">
            <div className="bg-black p-[2px] rounded-full">
              <img
                src={story.image}
                alt={story.username}
                className="w-14 h-14 rounded-full object-cover cursor-pointer"
              />
            </div>
          </div>
          <span className="text-xs text-white pt-1">{story.username}</span>
        </div>
      ))}
    </div>
  );
}