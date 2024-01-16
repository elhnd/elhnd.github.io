import { CarColor } from "./car-color.interface";

export interface CarModel {
  code        : string;
  description : string;
  colors      : CarColor[];
}