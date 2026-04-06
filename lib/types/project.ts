export interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  thumbnail: string | null;
  date: string;
  published: boolean;
  order: number;
}
