import { Play, Pause, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroProps {
  albumTitle: string;
  artist: string;
  coverImage: string;
  description: string;
  isPlaying: boolean;
  onPlayPause: () => void;
  onScrollToSongs: () => void;
}

export function Hero({
  albumTitle,
  artist,
  coverImage,
  description,
  isPlaying,
  onPlayPause,
  onScrollToSongs
}: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950/90 via-slate-950 to-blue-950/90" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Album Cover */}
          <div className="relative group">
            <div className={`relative w-72 h-72 sm:w-96 sm:h-96 rounded-2xl overflow-hidden shadow-2xl glow-purple ${isPlaying ? 'spin-slow' : ''}`}>
              <img
                src={coverImage}
                alt={`${albumTitle} - ${artist}`}
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
            
            {/* Glow effect behind */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-3xl blur-2xl -z-10 opacity-60 group-hover:opacity-80 transition-opacity" />
            
            {/* Play button overlay */}
            <button
              onClick={onPlayPause}
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 hover:bg-white/30 transition-colors">
                {isPlaying ? (
                  <Pause className="w-10 h-10 text-white" />
                ) : (
                  <Play className="w-10 h-10 text-white ml-1" />
                )}
              </div>
            </button>
          </div>

          {/* Text Content */}
          <div className="text-center lg:text-left max-w-xl">
            <p className="text-purple-400 font-medium tracking-widest uppercase text-sm mb-4">
              Nuevo Álbum
            </p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
              {albumTitle}
            </h1>
            <p className="text-2xl sm:text-3xl text-purple-300 font-light mb-6">
              {artist}
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              {description}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={onPlayPause}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-purple-600/25 transition-all hover:shadow-purple-600/40"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-5 h-5 mr-2" />
                    Pausar
                  </>
                ) : (
                  <>
                    <Play className="w-5 h-5 mr-2" />
                    Escuchar Ahora
                  </>
                )}
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={onScrollToSongs}
                className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 px-8 py-6 text-lg rounded-full"
              >
                Ver Canciones
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={onScrollToSongs}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
