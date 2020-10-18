import { Components } from "gd-bs";
import { Base } from "./base";
export declare class Alert extends Base<Components.IAlert> {
    content: string | Element;
    header: string;
    isDismissible: boolean;
    type: number;
    constructor();
}
