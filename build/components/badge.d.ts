import { Components } from "gd-bs";
import { Base } from "./base";
export declare class Badge extends Base<Components.IBadge> {
    content: string | Element;
    data: any;
    header: string;
    href: string;
    isPill: boolean;
    onClick: (badge?: Components.IBadge, ev?: Event) => void;
    type: number;
    constructor();
}
