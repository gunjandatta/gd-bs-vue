import { Components } from "gd-bs";
import { Base } from "./base";
import { Component, Prop } from "vue-property-decorator";

@Component
export class Breadcrumb extends Base<Components.IBreadcrumb> {
  // Properties
  @Prop(Array) items: Array<Components.IBreadcrumbItem>;
  @Prop(Function) onClick: (item?: Components.IBreadcrumbItem, ev?: Event) => void;

  // Constructor
  constructor() {
    super();

    // Set the bs component
    this._bs = Components.Breadcrumb;
  }
}