import { Components } from "gd-bs";
import { Base } from "./base";
import { Component, Prop } from "vue-property-decorator";

@Component
export class Spinner extends Base<Components.ISpinner> {
  // Properties
  @Prop(Boolean) isGrowing: boolean;
  @Prop(Boolean) isSmall: boolean;
  @Prop(String) text: string;
  @Prop(Number) type: number;

  // Constructor
  constructor() {
    super();

    // Set the bs component
    this._bs = Components.Spinner;
  }
}