import { Components } from "gd-bs";
import { Base } from "./base";
import Vue from "vue";

export const Nav = Vue.extend({
  name: "Nav",
  extends: Base,
  data: () => ({
    bs: Components.Nav
  }),
  props: {
    data: { type: Object },
    enableFill: { type: Boolean },
    fadeTabs: { type: Boolean },
    id: { type: String },
    items: { type: Array },
    isJustified: { type: Boolean },
    isPills: { type: Boolean },
    isTabs: { type: Boolean },
    isVertical: { type: Boolean }
  }
});