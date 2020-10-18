import { Components } from "gd-bs";
import { Base } from "./base";
export declare class CheckboxGroup extends Base<Components.ICheckboxGroup> {
    colSize: number;
    hideLabel: boolean;
    isInline: boolean;
    isReadonly: boolean;
    label: string;
    items: Array<Components.ICheckboxGroupItem>;
    multi: boolean;
    onRender: (el?: HTMLElement, item?: Components.ICheckboxGroupItem) => void;
    onChange: (items: Components.ICheckboxGroupItem | Array<Components.ICheckboxGroupItem>) => void;
    renderRow: boolean;
    title: string;
    type: number;
    value: {
        type: [String, Object];
    };
    constructor();
}
