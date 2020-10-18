import { Components } from "gd-bs";
import { Base } from "./base";
import { Component, Prop } from "vue-property-decorator";

@Component
export class Alert extends Base<Components.IAlert> {
  // Properties
  @Prop([String, Object]) content: string | Element;
  @Prop(String) header: string;
  @Prop(Boolean) isDismissible: boolean;
  @Prop(Number) type: number;

  // Constructor
  constructor() {
    super();

    // Set the bs component
    this._bs = Components.Alert;
  }
}