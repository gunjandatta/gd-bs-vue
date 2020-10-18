import { Components } from "gd-bs";
import { Base } from "./base";
export declare class Nav extends Base<Components.INav> {
    data: any;
    enableFill: boolean;
    fadeTabs: boolean;
    id: string;
    items: Array<Components.INavLink>;
    isJustified: boolean;
    isPills: boolean;
    isTabs: boolean;
    isVertical: {
        type: Boolean;
    };
    constructor();
}
