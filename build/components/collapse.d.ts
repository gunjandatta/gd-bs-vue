import { Components } from "gd-bs";
import { Base } from "./base";
export declare class Collapse extends Base<Components.ICollapse> {
    content: string | Element;
    data: any;
    id: string;
    isMulti: boolean;
    onRender: (props?: Components.ICollapseProps, el?: HTMLElement) => void;
    options: Components.ICollapseOptions;
    constructor();
}
