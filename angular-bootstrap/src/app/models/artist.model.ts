import { Goods } from "./goods.model";

export interface Artist {
    _id: string;
    name: string;
    spotifyUrl: string;
    debutedDate: Date;
    goods: Goods[];
  }