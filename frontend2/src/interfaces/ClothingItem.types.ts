import { Maybe } from "@/utils/Maybe.types";

export type ClothingItem = {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
};

export type RequestInterface = {
  /*
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  data: ClothingItem;
  */
 
};

export interface ClothingItemState {
  items: Maybe<ClothingItem[]>;
}
