import { Music, Instagram, Twitter, Youtube, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 border-t border-white/10">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-950/30 to-transparent" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          {/* Logo and description */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                <Music className="w-6 h-6 text-white" />
              </div>
              <span className="font-display text-2xl font-bold text-white">
                Silent Waves
              </span>
            </div>
            <p className="text-slate-400 max-w-md mx-auto">
              Música que conecta almas, trasciende fronteras y despierta emociones.
            </p>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-4 mb-12">
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-purple-600/20 hover:border-purple-500/50 transition-all"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600/20 hover:border-blue-500/50 transition-all"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-red-600/20 hover:border-red-500/50 transition-all"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-green-600/20 hover:border-green-500/50 transition-all"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
            </a>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-8 mb-12 text-sm">
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              Términos de Uso
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              Contacto
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              Prensa
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-slate-500 text-sm">
            <p className="flex items-center justify-center gap-1">
              © {currentYear} Silent Waves. Hecho con 
              <Heart className="w-4 h-4 text-red-500 fill-red-500" /> 
              y pasión por la música.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
