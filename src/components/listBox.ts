import { Components } from "gd-bs";
import { Base } from "./base";
import { Component, Prop } from "vue-property-decorator";

@Component
export class ListBox extends Base<Components.IListBox> {
  // Properties
  @Prop(String) label: string;
  @Prop(String) id: string;
  @Prop(Array) items: Array<Components.IDropdownItem>;
  @Prop(Boolean) multi: boolean;
  @Prop(String) placeholder: string;
  @Prop(Function) onChange: (items: Array<Components.IDropdownItem>) => void;
  @Prop([String, Array]) value: string | Array<string>;

  // Constructor
  constructor() {
    super();

    // Set the bs component
    this._bs = Components.ListBox;
  }
}