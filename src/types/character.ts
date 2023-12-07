export type Character = {
  id: number;
  name: string;
  images: string[];
  jutsu: string[];
  personal: {
    classification: string[];
    clan: string;
  };
};

export type CharactersResponse = {
  characters: Character[];
  currentPage: number;
  pageSize: number;
  total: number;
};
