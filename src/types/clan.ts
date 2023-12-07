import { Character } from "./character";

export type Clan = {
  id: number;
  name: string;
  characters: [Character["id"]];
};

export type ClansResponse = {
  clans: Clan[];
  currentPage: number;
  pageSize: number;
  total: number;
};
