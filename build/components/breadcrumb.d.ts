import { Components } from "gd-bs";
import { Base } from "./base";
export declare class Breadcrumb extends Base<Components.IBreadcrumb> {
    items: Array<Components.IBreadcrumbItem>;
    onClick: (item?: Components.IBreadcrumbItem, ev?: Event) => void;
    constructor();
}
