import { useRef } from 'react';
import { Hero } from '@/sections/Hero';
import { SongList } from '@/sections/SongList';
import { MusicPlayer } from '@/sections/MusicPlayer';
import { ArtistInfo } from '@/sections/ArtistInfo';
import { Footer } from '@/sections/Footer';
import { useAudioPlayer } from '@/hooks/useAudioPlayer';
import { albumData } from '@/data/album';
import './App.css';

function App() {
  const songsSectionRef = useRef<HTMLDivElement>(null);
  
  const {
    currentSong,
    isPlaying,
    currentTime,
    duration,
    volume,
    progress,
    playSong,
    togglePlay,
    playNext,
    playPrevious,
    seekTo,
    setVolume
  } = useAudioPlayer({ songs: albumData.songs });

  const scrollToSongs = () => {
    songsSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <Hero
        albumTitle={albumData.title}
        artist={albumData.artist}
        coverImage={albumData.coverImage}
        description={albumData.description}
        isPlaying={isPlaying}
        onPlayPause={togglePlay}
        onScrollToSongs={scrollToSongs}
      />

      {/* Songs Section */}
      <div ref={songsSectionRef}>
        <SongList
          songs={albumData.songs}
          currentSong={currentSong}
          isPlaying={isPlaying}
          onPlaySong={playSong}
        />
      </div>

      {/* Artist Info Section */}
      <ArtistInfo artist={albumData.artist} />

      {/* Footer */}
      <Footer />

      {/* Music Player */}
      <MusicPlayer
        currentSong={currentSong}
        isPlaying={isPlaying}
        currentTime={currentTime}
        duration={duration}
        volume={volume}
        progress={progress}
        onTogglePlay={togglePlay}
        onNext={playNext}
        onPrevious={playPrevious}
        onSeek={seekTo}
        onVolumeChange={setVolume}
      />

      {/* Bottom padding for player */}
      <div className="h-24" />
    </div>
  );
}

export default App;
