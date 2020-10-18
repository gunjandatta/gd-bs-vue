import { Components } from "gd-bs";
import { Base } from "./base";
import { Component, Prop } from "vue-property-decorator";

@Component
export class ListGroup extends Base<Components.IListGroup> {
  // Properties
  @Prop(Number) colWidth: number;
  @Prop(Boolean) fadeTabs: boolean;
  @Prop(Boolean) isFlush: boolean;
  @Prop(Boolean) isHorizontal: boolean;
  @Prop(Boolean) isTabs: boolean;
  @Prop(Array) items: Array<Components.IListGroupItem<Element>>;

  // Constructor
  constructor() {
    super();

    // Set the bs component
    this._bs = Components.ListGroup;
  }
}