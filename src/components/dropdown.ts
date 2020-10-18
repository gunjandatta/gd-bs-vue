import { Components } from "gd-bs";
import { Base } from "./base";
import { Component, Prop } from "vue-property-decorator";

@Component
export class Dropdown extends Base<Components.IDropdown> {
  // Properties
  @Prop(Boolean) dropLeft: boolean;
  @Prop(Boolean) dropRight: boolean;
  @Prop(Boolean) dropUp: boolean;
  @Prop(Boolean) formFl: boolean;
  @Prop(String) id: string;
  @Prop(Boolean) isDatalist: boolean;
  @Prop(Boolean) isReadonly: boolean;
  @Prop(Boolean) isSplit: boolean;
  @Prop(Array) items: Array<Components.IDropdownItem>;
  @Prop(String) label: string;
  @Prop(Boolean) menuOnly: boolean;
  @Prop(Boolean) multi: boolean;
  @Prop(Boolean) navFl: boolean;
  @Prop(Function) onChange: (item?: Components.IDropdownItem | Array<Components.IDropdownItem>, ev?: Event) => void;
  @Prop(Boolean) setLabelToValue: boolean;
  @Prop(String) title: string;
  @Prop(Number) type: number;
  @Prop(Object) value: any;

  // Constructor
  constructor() {
    super();

    // Set the bs component
    this._bs = Components.Dropdown;
  }
}