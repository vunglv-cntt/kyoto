import { Image } from "./Image";

export type Detail = {
  id: number;
  quantity:  number;
  product_attribute_name: string;
  product_attribute_name_translate: string;
  deleted_at: string;
  product: {
    id: number;
    name : string;
    name_translate: string;
    price:string;
    price_after_discount: number;
    discount:number;
    quantity:number;
    tag:string;
    description:string;
    description_translate:string;
    category_detail_id:number;
    quantity_sold:number;
    rating_point:number;
    status:string;
    created_at:string;
    updated_at:string;
    deleted_at:string;
    attributes :[];
    product_price:[];
    images:Image[]
  }

};

export type AddCart ={
  data: {
    data: Detail[]
  }
}
