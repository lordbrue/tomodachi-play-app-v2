export type Companion = {
  id: string;
  name: string;
  age?: number;
  city?: string;
  bio?: string;
  platforms: string[];
  genres: string[];
  avatar: string;
  images: string[];
  sessionTypes: Array<'text'|'voice'|'video'>;
  priceText?: number | null;
  priceVoice?: number | null;
  priceVideo?: number | null;
  available?: boolean;
};