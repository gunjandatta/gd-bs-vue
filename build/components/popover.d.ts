import { Components } from "gd-bs";
import { Base } from "./base";
export declare class Popover extends Base<Components.IPopover> {
    btnProps: Components.IButtonProps;
    isDismissible: boolean;
    options: Components.IPopoverOptions;
    target: Element;
    type: number;
    constructor();
}
