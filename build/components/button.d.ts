import { Components } from "gd-bs";
import { Base } from "./base";
export declare class Button extends Base<Components.IButton> {
    badge: Components.IBadgeProps;
    controls: string | Array<string>;
    data: any;
    href: string;
    iconSize: number;
    iconType: number;
    id: string;
    isBlock: boolean;
    isDisabled: boolean;
    isExpanded: boolean;
    isLarge: boolean;
    isLink: boolean;
    isSmall: boolean;
    onClick: (button?: Components.IButtonProps, ev?: Event) => void;
    spinnerProps: Components.ISpinnerProps;
    target: string;
    text: string;
    title: string;
    toggle: string;
    trigger: string;
    type: {
        type: Number;
    };
    constructor();
}
