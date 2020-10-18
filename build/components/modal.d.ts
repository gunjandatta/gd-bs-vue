import { Components } from "gd-bs";
import { Base } from "./base";
export declare class Modal extends Base<Components.IModal> {
    body: string | Element;
    disableFade: boolean;
    footer: string | Element;
    hideCloseButton: boolean;
    id: string;
    isCentered: boolean;
    isStatic: boolean;
    onClose: (el: HTMLDivElement) => void;
    onRenderBody: (el: HTMLDivElement) => void;
    onRenderFooter: (el: HTMLDivElement) => void;
    options: Components.IModalOptions;
    title: string;
    type: number;
    constructor();
}
