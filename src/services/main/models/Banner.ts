export type Banner = {
  id: number;
  image: string;
  link: string;
  ordinal_number: number;
};

export type GetBanners = {
  data: {
    data: Banner[];
  };
};
