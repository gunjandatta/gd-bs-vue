import { Components } from "gd-bs";
import { Base } from "./base";
import { Component, Prop } from "vue-property-decorator";

@Component
export class Carousel extends Base<Components.ICarousel> {
  // Properties
  @Prop(Boolean) enableControls: boolean;
  @Prop(Boolean) enableCrossfade: boolean;
  @Prop(Boolean) enableIndicators: boolean;
  @Prop(String) id: string;
  @Prop(Array) items: Array<Components.ICarouselItem>;
  @Prop(Object) options: Components.ICarouselOptions;

  // Constructor
  constructor() {
    super();

    // Set the bs component
    this._bs = Components.Carousel;
  }
}