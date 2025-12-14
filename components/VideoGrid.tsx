import React from 'react';
import VideoCard from './VideoCard';
import { MOCK_VIDEOS } from '../constants';

const VideoGrid: React.FC = () => {
  return (
    <main className="w-full max-w-[1600px] mx-auto px-4 py-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl md:text-2xl font-bold text-white">Recommended For You</h2>
        <span className="text-[#ff9000] text-sm font-semibold cursor-pointer hover:underline">See All</span>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
        {MOCK_VIDEOS.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </main>
  );
};

export default VideoGrid;