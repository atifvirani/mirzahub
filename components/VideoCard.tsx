import React from 'react';
import { Video } from '../constants';

interface VideoCardProps {
  video: Video;
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  return (
    <div className="group w-full flex flex-col gap-2 cursor-default pointer-events-none select-none">
      {/* Thumbnail Container */}
      <div className="relative w-full aspect-video bg-[#1b1b1b] overflow-hidden rounded-sm">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
          loading="lazy"
        />
        
        {/* Duration Badge */}
        <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs font-semibold px-1.5 py-0.5 rounded-[2px] border border-black/50">
          {video.duration}
        </div>
        
        {/* Hover overlay simulation (visual only) */}
        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>

      {/* Metadata */}
      <div className="flex flex-col gap-1 pr-2">
        <h3 className="text-white text-[15px] font-bold leading-tight line-clamp-2 group-hover:text-[#ff9000] transition-colors">
          {video.title}
        </h3>
        <div className="flex items-center text-[#888] text-[13px] gap-1">
          <span className="hover:underline">{video.author}</span>
        </div>
        <div className="text-[#666] text-[12px] flex items-center gap-1">
            <span className="text-white/60">{video.views}</span>
            <span>•</span>
            <span className="text-white/60">{video.timeAgo}</span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;