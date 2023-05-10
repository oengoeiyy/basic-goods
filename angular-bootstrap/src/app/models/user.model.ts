import { Goods } from "./goods.model";
import { Order } from "./order.model";

export interface User {
    id: number;
    username: string;
    password: number;
    waitinglist: Goods[];
    order: Order[];
  }