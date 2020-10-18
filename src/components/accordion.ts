import { Components } from "gd-bs";
import { Base } from "./base";
import { Component, Prop } from "vue-property-decorator";

@Component
export class Accordion extends Base<Components.IAccordion> {
  // Properties
  @Prop(String) id: string;
  @Prop(Array) items: Array<Components.IAccordionItem>;
  @Prop(Object) options: Components.IAccordionOptions;

  // Constructor
  constructor() {
    super();

    // Set the bs component
    this._bs = Components.Accordion;
  }
}