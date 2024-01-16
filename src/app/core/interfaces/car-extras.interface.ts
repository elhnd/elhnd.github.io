import { CarVariant } from "./car-variant.interface";

export interface CarExtras {
    configs     : CarVariant[];
    towHitch    : boolean;
    yoke        : boolean;
}