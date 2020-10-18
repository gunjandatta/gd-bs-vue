import { Components } from "gd-bs";
import { Base } from "./base";
import { Component, Prop } from "vue-property-decorator";

@Component
export class Toolbar extends Base<Components.IToolbar> {
  // Properties
  @Prop(Array) items: Array<Components.IToolbarItem>;
  @Prop(Number) spacing: number;

  // Constructor
  constructor() {
    super();

    // Set the bs component
    this._bs = Components.Toolbar;
  }
}