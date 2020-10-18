import { Components } from "gd-bs";
import { Base } from "./base";
export declare class Navbar extends Base<Components.INavbar> {
    brand: string;
    brandUrl: string;
    enableSearch: boolean;
    id: string;
    items: Array<Components.INavbarItem>;
    onClick: (item?: Components.INavbarItem, ev?: Event) => void;
    searchBox: Components.INavbarSearchBox;
    type: number;
    constructor();
}
