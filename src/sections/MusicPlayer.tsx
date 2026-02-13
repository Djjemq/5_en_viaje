import { Play, Pause, SkipBack, SkipForward, Volume2, Volume1, VolumeX } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import type { Song } from '@/types/song';

interface MusicPlayerProps {
  currentSong: Song | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  progress: number;
  onTogglePlay: () => void;
  onNext: () => void;
  onPrevious: () => void;
  onSeek: (time: number) => void;
  onVolumeChange: (volume: number) => void;
}

function formatTime(seconds: number): string {
  if (isNaN(seconds)) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

export function MusicPlayer({
  currentSong,
  isPlaying,
  currentTime,
  duration,
  volume,
  progress,
  onTogglePlay,
  onNext,
  onPrevious,
  onSeek,
  onVolumeChange
}: MusicPlayerProps) {
  if (!currentSong) return null;

  const VolumeIcon = volume === 0 ? VolumeX : volume < 0.5 ? Volume1 : Volume2;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 glass border-t border-white/10">
      {/* Progress bar */}
      <div className="w-full h-1 bg-white/10 cursor-pointer group"
        onClick={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const clickX = e.clientX - rect.left;
          const percentage = clickX / rect.width;
          onSeek(percentage * duration);
        }}
      >
        <div 
          className="h-full bg-gradient-to-r from-purple-500 to-blue-500 relative"
          style={{ width: `${progress}%` }}
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          
          {/* Song info */}
          <div className="flex items-center gap-4 min-w-0 flex-1">
            <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0">
              <img 
                src="/album-cover.jpg" 
                alt="Album cover"
                className={`w-full h-full object-cover ${isPlaying ? 'spin-slow' : ''}`}
              />
            </div>
            <div className="min-w-0">
              <p className="text-white font-medium truncate">{currentSong.title}</p>
              <p className="text-slate-400 text-sm truncate">Silent Waves</p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex flex-col items-center gap-2 flex-1 max-w-md">
            <div className="flex items-center gap-4">
              <button 
                onClick={onPrevious}
                className="text-slate-400 hover:text-white transition-colors p-2"
              >
                <SkipBack className="w-5 h-5" />
              </button>
              
              <button
                onClick={onTogglePlay}
                className="w-12 h-12 rounded-full bg-white text-slate-950 flex items-center justify-center hover:scale-105 transition-transform"
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5" />
                ) : (
                  <Play className="w-5 h-5 ml-0.5" />
                )}
              </button>
              
              <button 
                onClick={onNext}
                className="text-slate-400 hover:text-white transition-colors p-2"
              >
                <SkipForward className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex items-center gap-2 text-xs text-slate-400 w-full justify-center">
              <span className="w-10 text-right">{formatTime(currentTime)}</span>
              <div className="flex-1 max-w-xs">
                <Slider
                  value={[progress]}
                  max={100}
                  step={0.1}
                  onValueChange={([value]) => onSeek((value / 100) * duration)}
                  className="cursor-pointer"
                />
              </div>
              <span className="w-10">{formatTime(duration)}</span>
            </div>
          </div>

          {/* Volume */}
          <div className="flex items-center gap-2 flex-1 justify-end">
            <button 
              onClick={() => onVolumeChange(volume === 0 ? 0.7 : 0)}
              className="text-slate-400 hover:text-white transition-colors"
            >
              <VolumeIcon className="w-5 h-5" />
            </button>
            <div className="w-24 hidden sm:block">
              <Slider
                value={[volume * 100]}
                max={100}
                step={1}
                onValueChange={([value]) => onVolumeChange(value / 100)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Audio visualizer */}
      {isPlaying && (
        <div className="absolute bottom-full left-0 right-0 h-8 flex items-end justify-center gap-1 pb-2 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="w-1 bg-gradient-to-t from-purple-500 to-blue-400 rounded-full sound-bar"
              style={{
                height: `${Math.random() * 20 + 4}px`,
                animationDelay: `${i * 0.05}s`,
                opacity: 0.6
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
