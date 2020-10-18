import { Components } from "gd-bs";
import { Base } from "./base";
export declare class Toast extends Base<Components.IToast> {
    body: string | Element;
    data: any;
    headerImgClass: string;
    headerImgSrc: string;
    headerText: string;
    hideCloseButton: boolean;
    mutedText: string;
    options: Components.IToastOptions;
    onClick: (el?: HTMLElement, data?: any) => void;
    onRenderBody: (el?: HTMLElement, data?: any) => void;
    onRenderHeader: (el?: HTMLElement, data?: any) => void;
    constructor();
}
