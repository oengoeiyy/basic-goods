import { Artist } from "./artist.model";

export interface Goods {
    _id: string;
    title: string;
    price: number;
    instock: number;
    releaseDate: EpochTimeStamp;
    image: string[];
    artist: Artist[];
  }
  
  