import { Components } from "gd-bs";
import { Base } from "./base";
import { Component, Prop } from "vue-property-decorator";

@Component
export class Form extends Base<Components.IForm> {
  // Properties
  @Prop(Array) controls: Array<Components.IFormControlProps>;
  @Prop(String) rowClassName: string;
  @Prop(Array) rows: Array<Components.IFormRow>;
  @Prop(Function) onControlRendering: (control: Components.IFormControlProps) => void | PromiseLike<Components.IFormControlProps>;
  @Prop(Function) onControlRendered: (control: Components.IFormControl) => void | PromiseLike<Components.IFormControl>;
  @Prop(Function) onRendered: (controls: Array<Components.IFormControl>) => void;
  @Prop(Object) value: any;

  // Constructor
  constructor() {
    super();

    // Set the bs component
    this._bs = Components.Form;
  }
}