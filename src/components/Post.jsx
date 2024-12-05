import React, { useState } from 'react';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from 'lucide-react';

export default function Post({ username, userImage, image, caption, likes, comments, created_at}) {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(isLiked ? likesCount - 1 : likesCount + 1);
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-lg mb-6">
      <div className="flex items-center justify-between p-3">
          <a href={`/${username}`} className="flex">
            <div className="flex items-center space-x-3">
              <img src={userImage} alt={username} className="w-8 h-8 rounded-full object-cover" />
              <span className="font-semibold text-white">{username}</span>
            </div>
          </a>
        <MoreHorizontal className="w-5 h-5 cursor-pointer text-white" />
      </div>

      <img src={image} alt="Post" className="w-100 h-100 object-cover max-h-[600px] p-1"  onDoubleClick={handleLike}/>

      <div className="p-3">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-4">
            <Heart
              className={`w-7 h-7 cursor-pointer hover:scale-110 transition-transform ${
                isLiked ? 'fill-red-500 stroke-red-500' : 'text-white'
              }`}
              onClick={handleLike}
            />
            <MessageCircle className="w-7 h-7 cursor-pointer hover:scale-110 transition-transform text-white" />
            <Send className="w-7 h-7 cursor-pointer hover:scale-110 transition-transform text-white" />
          </div>
          <Bookmark className="w-7 h-7 cursor-pointer hover:scale-110 transition-transform text-white" />
        </div>

        <div className="font-semibold mb-2 text-white">{likesCount.toLocaleString()} likes</div>
        
        <div className="text-white">
          <span className="font-bold mr-2 ">{caption}</span>
        </div>
        <button onClick={""}>
          <div className="mt-2 text-sm text-gray-50">View all {comments} comments</div>
        </button>
        <input
          type="text"
          placeholder="Add a comment..."
          className="w-full mt-3 text-sm bg-transparent text-white placeholder-zinc-400 focus:outline-none"
        />
      </div>
    </div>
  );
}