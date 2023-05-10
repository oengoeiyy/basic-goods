import { Goods } from "./goods.model";

export interface Order {
    id: number;
    timestamp: EpochTimeStamp;
    goods: Goods[];
  }