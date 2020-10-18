import { Components } from "gd-bs";
import { Base } from "./base";
import { Component, Prop } from "vue-property-decorator";

@Component
export class Toast extends Base<Components.IToast> {
  // Properties
  @Prop([String, Element]) body: string | Element;
  @Prop(Object) data: any;
  @Prop(String) headerImgClass: string;
  @Prop(String) headerImgSrc: string;
  @Prop(String) headerText: string;
  @Prop(Boolean) hideCloseButton: boolean;
  @Prop(String) mutedText: string;
  @Prop(Object) options: Components.IToastOptions;
  @Prop(Function) onClick: (el?: HTMLElement, data?: any) => void;
  @Prop(Function) onRenderBody: (el?: HTMLElement, data?: any) => void;
  @Prop(Function) onRenderHeader: (el?: HTMLElement, data?: any) => void;

  // Constructor
  constructor() {
    super();

    // Set the bs component
    this._bs = Components.Toast;
  }
}