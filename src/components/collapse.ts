import { Components } from "gd-bs";
import { Base } from "./base";
import { Component, Prop } from "vue-property-decorator";

@Component
export class Collapse extends Base<Components.ICollapse> {
  // Properties
  @Prop([String, Object]) content: string | Element;
  @Prop(Object) data: any;
  @Prop(String) id: string;
  @Prop(Boolean) isMulti: boolean;
  @Prop(Function) onRender: (props?: Components.ICollapseProps, el?: HTMLElement) => void;
  @Prop(Object) options: Components.ICollapseOptions;

  // Constructor
  constructor() {
    super();

    // Set the bs component
    this._bs = Components.Collapse;
  }
}