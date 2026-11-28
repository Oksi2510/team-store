export interface Meme {
  id: number;
  title: string;
  year: number;
  image: string;
  video: string | null;
  origin: string;
  tags: string[];
}
