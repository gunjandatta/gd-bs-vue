import { Components } from "gd-bs";
import { Base } from "./base";
import { Component, Prop } from "vue-property-decorator";

@Component
export class ButtonGroup extends Base<Components.IButtonGroup> {
  // Properties
  @Prop(Array) buttons: Components.IButtonProps;
  @Prop(Number) buttonType: number;
  @Prop(String) id: string;
  @Prop(Boolean) isLarge: boolean;
  @Prop(Boolean) isSmall: boolean;
  @Prop(Boolean) isVertical: boolean;
  @Prop(String) label: string;

  // Constructor
  constructor() {
    super();

    // Set the bs component
    this._bs = Components.ButtonGroup;
  }
}