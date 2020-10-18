import { Components } from "gd-bs";
import { Base } from "./base";
export declare class Card extends Base<Components.ICard> {
    body: Array<Components.ICardBody<Element>>;
    footer: Components.ICardFooter<Element>;
    header: Components.ICardHeader<Element>;
    imgBottom: {
        alt?: string;
        src?: string;
    };
    imgTop: {
        alt?: string;
        src?: string;
    };
    onClick: (card?: Components.ICardBody, ev?: Event) => void;
    constructor();
}
