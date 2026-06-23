export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  title: string;
  category: string;
}
