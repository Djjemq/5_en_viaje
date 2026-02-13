import { useState, useRef, useEffect, useCallback } from 'react';
import type { Song } from '@/types/song';

interface UseAudioPlayerProps {
  songs: Song[];
}

interface UseAudioPlayerReturn {
  currentSong: Song | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  playSong: (song: Song) => void;
  togglePlay: () => void;
  playNext: () => void;
  playPrevious: () => void;
  seekTo: (time: number) => void;
  setVolume: (volume: number) => void;
  progress: number;
}

export function useAudioPlayer({ songs }: UseAudioPlayerProps): UseAudioPlayerReturn {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolumeState] = useState(0.7);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio();
    audioRef.current.volume = volume;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const handleEnded = () => {
      playNext();
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [currentSong]);

  const playSong = useCallback((song: Song) => {
    if (audioRef.current) {
      if (currentSong?.id === song.id) {
        togglePlay();
        return;
      }
      
      audioRef.current.src = song.audioUrl;
      audioRef.current.play();
      setCurrentSong(song);
      setIsPlaying(true);
    }
  }, [currentSong]);

  const togglePlay = useCallback(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  }, [isPlaying]);

  const playNext = useCallback(() => {
    if (!currentSong || songs.length === 0) return;
    
    const currentIndex = songs.findIndex(s => s.id === currentSong.id);
    const nextIndex = (currentIndex + 1) % songs.length;
    playSong(songs[nextIndex]);
  }, [currentSong, songs, playSong]);

  const playPrevious = useCallback(() => {
    if (!currentSong || songs.length === 0) return;
    
    const currentIndex = songs.findIndex(s => s.id === currentSong.id);
    const previousIndex = currentIndex === 0 ? songs.length - 1 : currentIndex - 1;
    playSong(songs[previousIndex]);
  }, [currentSong, songs, playSong]);

  const seekTo = useCallback((time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  }, []);

  const setVolume = useCallback((newVolume: number) => {
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
      setVolumeState(newVolume);
    }
  }, []);

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return {
    currentSong,
    isPlaying,
    currentTime,
    duration,
    volume,
    playSong,
    togglePlay,
    playNext,
    playPrevious,
    seekTo,
    setVolume,
    progress
  };
}
