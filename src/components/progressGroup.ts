import { Components } from "gd-bs";
import { Base } from "./base";
import { Component, Prop } from "vue-property-decorator";

@Component
export class ProgressGroup extends Base<Components.IProgressGroup> {
  // Properties
  @Prop(Boolean) isMultiple: boolean;
  @Prop(Array) progressbars: Array<Components.IProgressGroupProps>;

  // Constructor
  constructor() {
    super();

    // Set the bs component
    this._bs = Components.ProgressGroup;
  }
}