import { Components } from "gd-bs";
import Base from "./base.vue";
import Vue from "vue";

export const Carousel = Vue.extend({
  name: "Carousel",
  extends: Base,
  data: () => ({
    bs: Components.Carousel
  }),
  props: {
    enableControls: { type: Boolean },
    enableCrossfade: { type: Boolean },
    enableIndicators: { type: Boolean },
    id: { type: String },
    items: { type: Array },
    options: { type: Object }
  }
});