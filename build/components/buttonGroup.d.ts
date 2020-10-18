import { Components } from "gd-bs";
import { Base } from "./base";
export declare class ButtonGroup extends Base<Components.IButtonGroup> {
    buttons: Components.IButtonProps;
    buttonType: number;
    id: string;
    isLarge: boolean;
    isSmall: boolean;
    isVertical: boolean;
    label: string;
    constructor();
}
