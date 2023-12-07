export type TailedBeast = {
  id: number;
  name: string;
  images: string[];
  jutsu: string[];
};

export type TailedBeastsResponse = {
  ["tailed-beasts"]: TailedBeast[];
  currentPage: number;
  pageSize: number;
  total: number;
};
