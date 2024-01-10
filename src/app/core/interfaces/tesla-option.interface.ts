import { TeslaExtras } from "./tesla-extras.interface";

export interface TeslaOption {
  [model: string]: TeslaExtras;
}