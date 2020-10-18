import { Components } from "gd-bs";
import { Base } from "./base";
export declare class Dropdown extends Base<Components.IDropdown> {
    dropLeft: boolean;
    dropRight: boolean;
    dropUp: boolean;
    formFl: boolean;
    id: string;
    isDatalist: boolean;
    isReadonly: boolean;
    isSplit: boolean;
    items: Array<Components.IDropdownItem>;
    label: string;
    menuOnly: boolean;
    multi: boolean;
    navFl: boolean;
    onChange: (item?: Components.IDropdownItem | Array<Components.IDropdownItem>, ev?: Event) => void;
    setLabelToValue: boolean;
    title: string;
    type: number;
    value: any;
    constructor();
}
