import React from 'react';
import { useMusicPlayer } from '../contexts/MusicPlayerContext';

export const MusicControl: React.FC = () => {
  const { 
    isPlaying, 
    togglePlayPause,
    volume, 
    setVolume,
    currentTrack 
  } = useMusicPlayer();

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume); // This won't interrupt playback
  };

  return (
    <div className="fixed bottom-4 right-4 bg-spotify-dark-gray p-4 rounded-xl shadow-lg z-50 flex items-center space-x-4">
      <div className="min-w-[120px]">
        <p className="text-sm text-spotify-text-gray truncate">
          {currentTrack?.title || 'No track'}
        </p>
        <p className="text-xs text-spotify-text-gray">
          {isPlaying ? 'Playing' : 'Paused'}
        </p>
      </div>
      
      <button 
        onClick={togglePlayPause}
        className="p-2 text-white hover:text-spotify-green transition-colors"
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? (
          // Pause icon
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ) : (
          // Play icon
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )}
      </button>
      
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolumeChange}
        className="w-24 accent-spotify-green"
      />
    </div>
  );
};