export interface ItemGaleria {
  id: string;
  title: string;
  date: string;
  description?: string;
  src: string;
  tags?: string[];
  aspectRatio?: string;
}

export interface Album {
  slug: string;
  title: string;
  coverSrc: string;
  date: string;
  description?: string;
  category: 'desenhos' | 'fotos';
  items: ItemGaleria[];
  tags?: string[];
}
