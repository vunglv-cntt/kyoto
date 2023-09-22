import { Detail } from "./Detail";
export type Cart = {
  id: number;
  user_id: number;
  detail: Detail[];
  delivery_fee: number;
  distance: number;
  total_price: number;
  total_product_price: number;
  image: string;
};

export type GetCart = {
  data: {
    data: Cart[];
  };
};

export type AddProductToCart = {
  product_attribute_name?: string;
  product_id: number;
  quantity: number;
};
