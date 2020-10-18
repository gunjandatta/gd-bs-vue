import { Components } from "gd-bs";
import { Base } from "./base";
import { Component, Prop } from "vue-property-decorator";

@Component
export class Button extends Base<Components.IButton> {
  // Properties
  @Prop(Object) badge: Components.IBadgeProps;
  @Prop([String, Array]) controls: string | Array<string>;
  @Prop(Object) data: any;
  @Prop(String) href: string;
  @Prop(Number) iconSize: number;
  @Prop(Number) iconType: number;
  @Prop(String) id: string;
  @Prop(Boolean) isBlock: boolean;
  @Prop(Boolean) isDisabled: boolean;
  @Prop(Boolean) isExpanded: boolean;
  @Prop(Boolean) isLarge: boolean;
  @Prop(Boolean) isLink: boolean;
  @Prop(Boolean) isSmall: boolean;
  @Prop(Function) onClick: (button?: Components.IButtonProps, ev?: Event) => void;
  @Prop(Object) spinnerProps: Components.ISpinnerProps;
  @Prop(String) target: string;
  @Prop(String) text: string;
  @Prop(String) title: string;
  @Prop(String) toggle: string;
  @Prop(String) trigger: string;
  @Prop(Number) type: { type: Number }

  // Constructor
  constructor() {
    super();

    // Set the bs component
    this._bs = Components.Button;
  }
}