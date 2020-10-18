import { Components } from "gd-bs";
import { Base } from "./base";
export declare class Accordion extends Base<Components.IAccordion> {
    id: string;
    items: Array<Components.IAccordionItem>;
    options: Components.IAccordionOptions;
    constructor();
}
