import { Components } from "gd-bs";
import { Base } from "./base";
import { Component, Prop } from "vue-property-decorator";

@Component
export class Card extends Base<Components.ICard> {
  // Properties
  @Prop(Array) body: Array<Components.ICardBody<Element>>;
  @Prop(Object) footer: Components.ICardFooter<Element>;
  @Prop(Object) header: Components.ICardHeader<Element>;
  @Prop(Object) imgBottom: {
    alt?: string;
    src?: string;
  }
  @Prop(Object) imgTop: {
    alt?: string;
    src?: string;
  }
  @Prop(Function) onClick: (card?: Components.ICardBody, ev?: Event) => void;

  // Constructor
  constructor() {
    super();

    // Set the bs component
    this._bs = Components.Card;
  }
}