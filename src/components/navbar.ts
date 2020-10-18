import { Components } from "gd-bs";
import { Base } from "./base";
import { Component, Prop } from "vue-property-decorator";

@Component
export class Navbar extends Base<Components.INavbar> {
  // Properties
  @Prop(String) brand: string;
  @Prop(String) brandUrl: string;
  @Prop(Boolean) enableSearch: boolean;
  @Prop(String) id: string;
  @Prop(Array) items: Array<Components.INavbarItem>;
  @Prop(Function) onClick: (item?: Components.INavbarItem, ev?: Event) => void;
  @Prop(Object) searchBox: Components.INavbarSearchBox
  @Prop(Number) type: number;

  // Constructor
  constructor() {
    super();

    // Set the bs component
    this._bs = Components.Navbar;
  }
}