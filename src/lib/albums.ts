import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Album } from '@/types/album';

const albumsDirectory = path.join(process.cwd(), 'content/albums');

export function getAllAlbums(): Album[] {
  const fileNames = fs.readdirSync(albumsDirectory);
  const albums = fileNames
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(albumsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        ...data,
      } as Album;
    })
    .filter((album) => album.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return albums;
}

export function getAlbumBySlug(slug: string): Album | null {
  try {
    const fullPath = path.join(albumsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug,
      ...data,
    } as Album;
  } catch {
    return null;
  }
} 