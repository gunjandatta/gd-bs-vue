import { Components } from "gd-bs";
import { Base } from "./base";
export declare class ListGroup extends Base<Components.IListGroup> {
    colWidth: number;
    fadeTabs: boolean;
    isFlush: boolean;
    isHorizontal: boolean;
    isTabs: boolean;
    items: Array<Components.IListGroupItem<Element>>;
    constructor();
}
