import { Components } from "gd-bs";
import { Base } from "./base";
export declare class ListBox extends Base<Components.IListBox> {
    label: string;
    id: string;
    items: Array<Components.IDropdownItem>;
    multi: boolean;
    placeholder: string;
    onChange: (items: Array<Components.IDropdownItem>) => void;
    value: string | Array<string>;
    constructor();
}
