export interface AlbumImage {
  image: string;
  caption?: string;
}

export interface Album {
  title: string;
  description: string;
  date: string;
  coverImage: string;
  images: AlbumImage[];
  published: boolean;
  slug: string;
} 