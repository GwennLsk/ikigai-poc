export interface Game {
  id: number;
  name: string;
  tags: string[];
  genre: string[];
  parution: string;
  short: string;
  description: string;
  vignette: string;
  images: string[];
  resources?: Link[];
  spotlight?: boolean;
}

interface Link {
  url: string;
  title: string;
}
