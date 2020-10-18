import { Components } from "gd-bs";
import { Base } from "./base";
import { Component, Prop } from "vue-property-decorator";

@Component
export class Modal extends Base<Components.IModal> {
  // Properties
  @Prop([String, Element]) body: string | Element;
  @Prop(Boolean) disableFade: boolean;
  @Prop([String, Element]) footer: string | Element;
  @Prop(Boolean) hideCloseButton: boolean;
  @Prop(String) id: string;
  @Prop(Boolean) isCentered: boolean;
  @Prop(Boolean) isStatic: boolean;
  @Prop(Function) onClose: (el: HTMLDivElement) => void;
  @Prop(Function) onRenderBody: (el: HTMLDivElement) => void;
  @Prop(Function) onRenderFooter: (el: HTMLDivElement) => void;
  @Prop(Object) options: Components.IModalOptions;
  @Prop(String) title: string;
  @Prop(Number) type: number;

  // Constructor
  constructor() {
    super();

    // Set the bs component
    this._bs = Components.Modal;
  }
}