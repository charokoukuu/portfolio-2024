export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  tags: string[];
  description: string;
  thumbnail: string | null;
  publishedAt: string;
  published: boolean;
}
