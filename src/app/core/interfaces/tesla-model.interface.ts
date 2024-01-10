import { TeslaColor } from "./tesla-color.interface";

export interface TeslaModel {
  code: string;
  description: string;
  colors: TeslaColor[];
}