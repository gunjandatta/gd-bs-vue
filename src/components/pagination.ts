import { Components } from "gd-bs";
import { Base } from "./base";
import Vue from "vue";

export const Pagination = Vue.extend({
  name: "Pagination",
  extends: Base,
  data: () => ({
    bs: Components.Pagination
  }),
  props: {
    alignment: { type: Number },
    isLarge: { type: Boolean },
    isSmall: { type: Boolean },
    label: { type: String },
    numberOfPages: { type: Number },
    onClick: { type: Function }
  }
});