import { Components } from "gd-bs";
import Base from "./base.vue";
import Vue from "vue";

export const Spinner = Vue.extend({
  name: "Spinner",
  extends: Base,
  data: () => ({
    bs: Components.Spinner
  }),
  props: {
    isGrowing: { type: Boolean },
    isSmall: { type: Boolean },
    text: { type: String },
    type: { type: Number }
  }
});