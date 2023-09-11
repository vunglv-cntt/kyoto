import { Image } from "./Image";

export type ProductType = {
  id: number;
  name: string;
  price: number;
  price_after_discount: number;
  discount: number;
  quantity: number;
  tag: string;
  description: string;
  category_detail_id: number;
  quantity_sold: number;
  rating_point: number;
  ordinal_number: number;
  status: boolean;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  images: Image[];
  attributes: [];
  product_price: [];
  keywords: [];
};

export type GetProducts = {
  data: {
    data: ProductType[];
  };
};
