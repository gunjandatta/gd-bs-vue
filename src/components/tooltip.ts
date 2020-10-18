import { Components } from "gd-bs";
import { Base } from "./base";
import { Component, Prop } from "vue-property-decorator";

@Component
export class Tooltip extends Base<Components.ITooltip> {
  // Properties
  @Prop(Number) btnType: number;
  @Prop(Object) options: Components.ITooltipOptions;
  @Prop(String) text: string;
  @Prop(Number) type: number;

  // Constructor
  constructor() {
    super();

    // Set the bs component
    this._bs = Components.Tooltip;
  }
}