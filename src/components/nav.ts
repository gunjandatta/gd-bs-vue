import { Components } from "gd-bs";
import { Base } from "./base";
import { Component, Prop } from "vue-property-decorator";

@Component
export class Nav extends Base<Components.INav> {
  // Properties
  @Prop(Object) data: any;
  @Prop(Boolean) enableFill: boolean;
  @Prop(Boolean) fadeTabs: boolean;
  @Prop(String) id: string;
  @Prop(Array) items: Array<Components.INavLink>;
  @Prop(Boolean) isJustified: boolean;
  @Prop(Boolean) isPills: boolean;
  @Prop(Boolean) isTabs: boolean;
  @Prop(Boolean) isVertical: { type: Boolean }

  // Constructor
  constructor() {
    super();

    // Set the bs component
    this._bs = Components.Nav;
  }
}