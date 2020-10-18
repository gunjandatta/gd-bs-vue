import { Components } from "gd-bs";
import { Base } from "./base";
export declare class Jumbotron extends Base<Components.IJumbotron> {
    content: string | Element;
    isFluid: boolean;
    lead: string;
    onRenderContent: (el?: HTMLElement) => void;
    title: string;
    constructor();
}
