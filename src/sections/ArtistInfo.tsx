import { Music2, Mic2, Calendar, Award } from 'lucide-react';

interface ArtistInfoProps {
  artist: string;
}

export function ArtistInfo({ artist }: ArtistInfoProps) {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-slate-950 to-purple-950/30" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
              Sobre el Artista
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Artist image placeholder */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-white/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                    <span className="text-5xl font-display font-bold text-white">
                      {artist.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <p className="text-2xl font-display text-white">{artist}</p>
                </div>
              </div>
              
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl blur-2xl -z-10" />
            </div>

            {/* Artist info */}
            <div className="space-y-6">
              <p className="text-slate-300 text-lg leading-relaxed">
                <span className="text-purple-400 font-medium">{artist}</span> es un proyecto musical 
                independiente que nace de la fusión entre la música electrónica atmosférica y las 
                melodías orgánicas. Con un estilo único que trasciende géneros, cada composición 
                es un viaje sonoro diseñado para conectar con lo más profundo del ser.
              </p>
              
              <p className="text-slate-300 text-lg leading-relaxed">
                "Ecos del Alma" representa la culminación de años de exploración musical, 
                donde cada canción cuenta una historia de transformación, esperanza y conexión 
                con el universo interior.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="glass rounded-xl p-4 text-center">
                  <Music2 className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-white">3</p>
                  <p className="text-slate-400 text-sm">Álbumes</p>
                </div>
                <div className="glass rounded-xl p-4 text-center">
                  <Mic2 className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-white">50K+</p>
                  <p className="text-slate-400 text-sm">Oyentes</p>
                </div>
                <div className="glass rounded-xl p-4 text-center">
                  <Calendar className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-white">2019</p>
                  <p className="text-slate-400 text-sm">Inicio</p>
                </div>
                <div className="glass rounded-xl p-4 text-center">
                  <Award className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-white">12</p>
                  <p className="text-slate-400 text-sm">Premios</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
