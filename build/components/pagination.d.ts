import { Components } from "gd-bs";
import { Base } from "./base";
export declare class Pagination extends Base<Components.IPagination> {
    alignment: number;
    isLarge: boolean;
    isSmall: boolean;
    label: string;
    numberOfPages: number;
    onClick: (pageNumber?: number, ev?: Event) => void;
    constructor();
}
