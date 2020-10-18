import { Components } from "gd-bs";
import { Base } from "./base";
import { Component, Prop } from "vue-property-decorator";

@Component
export class Popover extends Base<Components.IPopover> {
  // Properties
  @Prop(Object) btnProps: Components.IButtonProps;
  @Prop(Boolean) isDismissible: boolean;
  @Prop(Object) options: Components.IPopoverOptions;
  @Prop(Object) target: Element;
  @Prop(Number) type: number;

  // Constructor
  constructor() {
    super();

    // Set the bs component
    this._bs = Components.Popover;
  }
}