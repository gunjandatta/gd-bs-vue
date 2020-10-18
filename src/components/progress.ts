import { Components } from "gd-bs";
import { Base } from "./base";
import { Component, Prop } from "vue-property-decorator";

@Component
export class Progress extends Base<Components.IProgress> {
  // Properties
  @Prop(Boolean) isAnimated: boolean;
  @Prop(Boolean) isStriped: boolean;
  @Prop(String) label: string;
  @Prop(Number) max: number;
  @Prop(Number) min: number;
  @Prop(Number) size: number;

  // Constructor
  constructor() {
    super();

    // Set the bs component
    this._bs = Components.Progress;
  }
}