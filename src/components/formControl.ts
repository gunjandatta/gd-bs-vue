import { Components } from "gd-bs";
import { Base } from "./base";
import { Component, Prop } from "vue-property-decorator";

@Component
export class FormControl extends Base<Components.IFormControl> {
  // Properties
  @Prop(String) controlClassName: string;
  @Prop(Object) data: any;
  @Prop(String) description: string;
  @Prop(String) errorMessage: string;
  @Prop(Boolean) isReadonly: boolean;
  @Prop(Boolean) isPlainText: boolean;
  @Prop(String) label: string;
  @Prop(String) loadingMessage: string;
  @Prop(String) name: string;
  @Prop(Function) onControlRendering: (control: Components.IFormControlProps) => void | PromiseLike<Components.IFormControlProps>;
  @Prop(Function) onControlRendered: (control: Components.IFormControl) => void | PromiseLike<Components.IFormControl>;
  @Prop(Function) onGetValue: (control: Components.IFormControlProps) => any;
  @Prop(Function) onValidate: (control: Components.IFormControlProps, value: Components.IFormControlValidationResult) => boolean | Components.IFormControlValidationResult;
  @Prop(Boolean) required: boolean;
  @Prop(String) title: string;
  @Prop(Number) type: number;
  @Prop(Object) value: any;

  // Constructor
  constructor() {
    super();

    // Set the bs component
    this._bs = Components.FormControl;
  }
}