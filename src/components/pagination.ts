import { Components } from "gd-bs";
import { Base } from "./base";
import { Component, Prop } from "vue-property-decorator";

@Component
export class Pagination extends Base<Components.IPagination> {
  // Properties
  @Prop(Number) alignment: number;
  @Prop(Boolean) isLarge: boolean;
  @Prop(Boolean) isSmall: boolean;
  @Prop(String) label: string;
  @Prop(Number) numberOfPages: number;
  @Prop(Function) onClick: (pageNumber?: number, ev?: Event) => void;

  // Constructor
  constructor() {
    super();

    // Set the bs component
    this._bs = Components.Pagination;
  }
}