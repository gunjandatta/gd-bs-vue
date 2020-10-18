import { Components } from "gd-bs";
import { Base } from "./base";
import { Component, Prop } from "vue-property-decorator";

@Component
export class CardGroup extends Base<Components.ICardGroup> {
  // Properties
  @Prop(Array) cards: Array<Components.ICardProps>;
  @Prop(Boolean) isDeck: boolean;

  // Constructor
  constructor() {
    super();

    // Set the bs component
    this._bs = Components.CardGroup;
  }
}