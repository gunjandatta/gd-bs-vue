import { Components } from "gd-bs";
import { Base } from "./base";
import { Component, Prop } from "vue-property-decorator";

@Component
export class CheckboxGroup extends Base<Components.ICheckboxGroup> {
  // Properties
  @Prop(Number) colSize: number;
  @Prop(Boolean) hideLabel: boolean;
  @Prop(Boolean) isInline: boolean;
  @Prop(Boolean) isReadonly: boolean;
  @Prop(String) label: string;
  @Prop(Array) items: Array<Components.ICheckboxGroupItem>;
  @Prop(Boolean) multi: boolean;
  @Prop(Function) onRender: (el?: HTMLElement, item?: Components.ICheckboxGroupItem) => void;
  @Prop(Function) onChange: (items: Components.ICheckboxGroupItem | Array<Components.ICheckboxGroupItem>) => void;
  @Prop(Boolean) renderRow: boolean;
  @Prop(String) title: string;
  @Prop(Number) type: number;
  @Prop([String, Object]) value: { type: [String, Object] }

  // Constructor
  constructor() {
    super();

    // Set the bs component
    this._bs = Components.CheckboxGroup;
  }
}