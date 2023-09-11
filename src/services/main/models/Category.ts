export type Category = {
  id: number;
  name: string;
  icon: string;
  ordinal_number: number;
  created_at: string;
  updated_at: string;
  deleted_at: string;
};

export type GetCategories = {
  data: {
    data: Category[];
  };
};
