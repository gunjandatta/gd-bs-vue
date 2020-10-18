import { Components } from "gd-bs";
import { Base } from "./base";
import { Component, Prop } from "vue-property-decorator";

@Component
export class Badge extends Base<Components.IBadge> {
  // Properties
  @Prop([String, Object]) content: string | Element;
  @Prop(Object) data: any;
  @Prop(String) header: string;
  @Prop(String) href: string;
  @Prop(Boolean) isPill: boolean;
  @Prop(Function) onClick: (badge?: Components.IBadge, ev?: Event) => void;
  @Prop(Number) type: number;

  // Constructor
  constructor() {
    super();

    // Set the bs component
    this._bs = Components.Badge;
  }
}