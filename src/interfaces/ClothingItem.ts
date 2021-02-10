export interface ClothingItem {
  id: number;
  title: string;
  description: string;
  price: number;
}
export interface RequestInterface {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  data: ClothingItem[];
}
