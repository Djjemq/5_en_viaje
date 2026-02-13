export interface Song {
  id: number;
  title: string;
  duration: string;
  durationSeconds: number;
  lyrics: string;
  audioUrl: string;
}

export interface Album {
  title: string;
  artist: string;
  releaseDate: string;
  coverImage: string;
  description: string;
  songs: Song[];
}
