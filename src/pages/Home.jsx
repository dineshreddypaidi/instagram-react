import React from 'react';
import Header from '../components/Header';
import Stories from '../components/Stories';
import Post from '../components/Post';

const posts = [
  {
    id: 1,
    username: 'travel.earth',
    userImage: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6',
    image: 'https://images.unsplash.com/photo-1682687982501-1e58ab814714',
    caption: 'Beautiful sunset at the beach! 🌅 #travel #sunset #beach',
    created_at : '3h',
    likes: 1234,
    comments : 80,
  },
  {
    id: 2,
    username: 'foodie.life',
    userImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop',
    image: 'https://images.unsplash.com/photo-1682687218147-9806132dc697',
    caption: 'Delicious homemade pasta! 🍝 #food #cooking #foodie',
    likes: 2345,
  },
  {
    id: 3,
    username: 'photography.art',
    userImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    image: 'https://images.unsplash.com/photo-1682695796954-bad0d0f59ff1',
    caption: 'City lights at night ✨ #photography #nightlife #city',
    likes: 3456,
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
            {posts.map((post) => (
              <Post key={post.id} {...post} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;