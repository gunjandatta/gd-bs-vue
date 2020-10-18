import { Components } from "gd-bs";
import { Base } from "./base";
export declare class Progress extends Base<Components.IProgress> {
    isAnimated: boolean;
    isStriped: boolean;
    label: string;
    max: number;
    min: number;
    size: number;
    constructor();
}
