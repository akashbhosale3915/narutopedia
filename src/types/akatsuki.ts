export type Akatsuki = {
  id: number;
  name: string;
  images: string[];
  jutsu: string[];
  personal: {
    classification: string[];
    clan: string;
  };
};

export type AkatsukisResponse = {
  akatsuki: Akatsuki[];
  currentPage: number;
  pageSize: number;
  total: number;
};
