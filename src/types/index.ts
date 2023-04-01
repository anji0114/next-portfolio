export type Category = {
  id: string;
  name: string;
};

export type Work = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  type: string[];
  publishDate: string;
  thumbnail: any;
  description: string;
  details?: any[];
  content: string;
  categories: Category[];
};
