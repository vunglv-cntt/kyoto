export type BranchType = {
  id: number;
  image: string;
  name: string;
  address: string;
  city: string;
  district: string;
  ward: string;
  longitude: number;
  latitude: number;
  deleted_at: string;
};

export type GetBranchs = {
  data: {
    data: BranchType[];
  };
};
