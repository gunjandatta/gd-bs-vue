import { Components } from "gd-bs";
import { Base } from "./base";
import { Component, Prop } from "vue-property-decorator";

@Component
export class Jumbotron extends Base<Components.IJumbotron> {
  // Properties
  @Prop([String, Element]) content: string | Element;
  @Prop(Boolean) isFluid: boolean;
  @Prop(String) lead: string;
  @Prop(Function) onRenderContent: (el?: HTMLElement) => void;
  @Prop(String) title: string;

  // Constructor
  constructor() {
    super();

    // Set the bs component
    this._bs = Components.Jumbotron;
  }
}