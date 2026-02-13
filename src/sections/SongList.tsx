import { useState } from 'react';
import { Play, Pause, Clock, Music, ChevronDown, ChevronUp } from 'lucide-react';
import type { Song } from '@/types/song';
import { Button } from '@/components/ui/button';

interface SongListProps {
  songs: Song[];
  currentSong: Song | null;
  isPlaying: boolean;
  onPlaySong: (song: Song) => void;
}

export function SongList({ songs, currentSong, isPlaying, onPlaySong }: SongListProps) {
  const [expandedSong, setExpandedSong] = useState<number | null>(null);

  const toggleLyrics = (songId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedSong(expandedSong === songId ? null : songId);
  };

  return (
    <section id="songs" className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Canciones
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Explora cada track del álbum. Haz clic en cualquier canción para escucharla o ver su letra.
          </p>
        </div>

        {/* Songs list */}
        <div className="max-w-4xl mx-auto space-y-3">
          {songs.map((song, index) => {
            const isCurrentSong = currentSong?.id === song.id;
            const isExpanded = expandedSong === song.id;

            return (
              <div
                key={song.id}
                className={`group rounded-xl overflow-hidden transition-all duration-300 ${
                  isCurrentSong 
                    ? 'bg-gradient-to-r from-purple-600/30 to-blue-600/30 border border-purple-500/50' 
                    : 'bg-white/5 border border-white/10 hover:bg-white/10'
                }`}
              >
                {/* Song row */}
                <div 
                  className="flex items-center gap-4 p-4 cursor-pointer"
                  onClick={() => onPlaySong(song)}
                >
                  {/* Number/Play button */}
                  <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                    {isCurrentSong && isPlaying ? (
                      <div className="flex gap-0.5 items-end h-4">
                        <div className="w-1 bg-purple-400 animate-pulse" style={{ height: '60%', animationDuration: '0.5s' }} />
                        <div className="w-1 bg-purple-400 animate-pulse" style={{ height: '100%', animationDuration: '0.7s' }} />
                        <div className="w-1 bg-purple-400 animate-pulse" style={{ height: '40%', animationDuration: '0.6s' }} />
                      </div>
                    ) : (
                      <span className="text-slate-500 font-medium group-hover:hidden">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    )}
                    <button className="hidden group-hover:flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 text-white">
                      {isCurrentSong && isPlaying ? (
                        <Pause className="w-4 h-4" />
                      ) : (
                        <Play className="w-4 h-4 ml-0.5" />
                      )}
                    </button>
                  </div>

                  {/* Song info */}
                  <div className="flex-1 min-w-0">
                    <h3 className={`font-medium truncate ${isCurrentSong ? 'text-purple-300' : 'text-white'}`}>
                      {song.title}
                    </h3>
                  </div>

                  {/* Duration */}
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{song.duration}</span>
                  </div>

                  {/* Lyrics button */}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={(e) => toggleLyrics(song.id, e)}
                    className="text-slate-400 hover:text-white hover:bg-white/10"
                  >
                    <Music className="w-4 h-4 mr-2" />
                    Letra
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 ml-1" />
                    ) : (
                      <ChevronDown className="w-4 h-4 ml-1" />
                    )}
                  </Button>
                </div>

                {/* Expanded lyrics */}
                {isExpanded && (
                  <div className="px-4 pb-4 pt-0 border-t border-white/10">
                    <div className="pt-4 pl-14">
                      <pre className="text-slate-300 whitespace-pre-wrap font-body text-sm leading-relaxed">
                        {song.lyrics}
                      </pre>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Total duration */}
        <div className="text-center mt-8 text-slate-500">
          <p>Álbum completo • {songs.length} canciones • {calculateTotalDuration(songs)}</p>
        </div>
      </div>
    </section>
  );
}

function calculateTotalDuration(songs: Song[]): string {
  const totalSeconds = songs.reduce((acc, song) => acc + song.durationSeconds, 0);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  
  if (hours > 0) {
    return `${hours}h ${minutes}min`;
  }
  return `${minutes} minutos`;
}
