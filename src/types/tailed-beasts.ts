export type TailedBeast = {
  id: number;
  name: string;
  images: string[];
  jutsu: string[];
  personal: {
    classification: string[];
    clan: string;
  };
};

export type TailedBeastsResponse = {
  ["tailed-beasts"]: TailedBeast[];
  currentPage: number;
  pageSize: number;
  total: number;
};
