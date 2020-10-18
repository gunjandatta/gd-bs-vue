import { Components } from "gd-bs";
import { Base } from "./base";
import { Component, Prop } from "vue-property-decorator";

@Component
export class InputGroup extends Base<Components.IInputGroup> {
  // Properties
  @Prop(Array) appendedButtons: Array<Components.IButtonProps>;;
  @Prop(String) appendedLabel: string;
  @Prop(Boolean) formFl: boolean;
  @Prop(String) id: string;
  @Prop(Boolean) isLarge: boolean;
  @Prop(Boolean) isReadonly: boolean;
  @Prop(Boolean) isSmall: boolean;
  @Prop(String) label: string;
  @Prop(Number) max: number;
  @Prop(Number) min: number;
  @Prop(Function) onClear: () => void;
  @Prop(Function) onChange: (value?: string, ev?: Event) => void;
  @Prop(String) placeholder: string;
  @Prop(Array) prependedButtons: Array<Components.IButtonProps>;;
  @Prop(String) prependedLabel: string;
  @Prop(Number) rows: number;
  @Prop(Number) step: number;
  @Prop(String) title: string;
  @Prop(Number) type: number;
  @Prop(String) value: string;

  // Constructor
  constructor() {
    super();

    // Set the bs component
    this._bs = Components.InputGroup;
  }
}