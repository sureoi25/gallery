import React, { createContext, useState, useContext, useEffect, useRef } from 'react';

type Track = {
  url: string;
  title: string;
};

type MusicPlayerContextType = {
  isPlaying: boolean;
  currentTrack: Track | null;
  playTrack: (track: Track) => void;
  togglePlayPause: () => void;
  volume: number;
  setVolume: (volume: number) => void;
};

const MusicPlayerContext = createContext<MusicPlayerContextType | undefined>(undefined);

export const MusicPlayerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const audioRef = useRef<HTMLAudioElement>(new Audio());

  // Initialize audio element
  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true;

    // Sync React state with actual audio state
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.pause();
    };
  }, []);

  // Keep volume in sync
  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (audio.paused) {
      audio.play().catch(error => console.error('Playback failed:', error));
    } else {
      audio.pause();
    }
  };

  const playTrack = (track: Track) => {
    const audio = audioRef.current;

    // If new track, load it and play
    if (!currentTrack || currentTrack.url !== track.url) {
      audio.src = track.url;
      setCurrentTrack(track);
      audio.play().catch(error => console.error('Playback failed:', error));
      return;
    }

    // If same track, only play if paused
    if (audio.paused) {
      audio.play().catch(error => console.error('Playback failed:', error));
    }
  };

  return (
    <MusicPlayerContext.Provider value={{
      isPlaying,
      currentTrack,
      playTrack,
      togglePlayPause,
      volume,
      setVolume
    }}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

export const useMusicPlayer = () => {
  const context = useContext(MusicPlayerContext);
  if (!context) {
    throw new Error('useMusicPlayer must be used within MusicPlayerProvider');
  }
  return context;
};
