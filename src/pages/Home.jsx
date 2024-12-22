import React from 'react';
import Header from '../components/Header';
import Stories from '../components/Stories';
import UserFeed from '../actions/userFeed';

const posts = [
  {
    post_id: 1,
    user : {
      "username" : "dineshreddy",
      "profile_image_url" : "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
      },
    content_url: 'https://images.unsplash.com/photo-1682687982501-1e58ab814714',
    caption: 'Beautiful sunset at the beach! 🌅 #travel #sunset #beach',
    created_at : '3h',
    likes: 1234,
    comments : 80,
    shares: 0,
  },
  {
    post_id: 1,
    user : {
      "username" : "dineshreddy",
      "profile_image_url" : "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
      },
    content_url: 'https://images.unsplash.com/photo-1682687982501-1e58ab814714',
    caption: 'Beautiful sunset at the beach! 🌅 #travel #sunset #beach',
    created_at : '3h',
    likes: 1234,
    comments : 80,
    shares: 0,
  },
  {
    post_id: 1,
    user : {
      "username" : "dineshreddy",
      "profile_image_url" : "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
      },
    content_url: 'https://images.unsplash.com/photo-1682687982501-1e58ab814714',
    caption: 'Beautiful sunset at the beach! 🌅 #travel #sunset #beach',
    created_at : '3h',
    likes: 1234,
    comments : 80,
    shares: 0,
  },
];

function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />

      <main className="md:ml-60 pb-16">
        <div className="max-w-[650px] mx-auto px-4 pt-6">
          <Stories />
          
          <div className="mt-6">
            <UserFeed />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;