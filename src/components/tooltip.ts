import { Components } from "gd-bs";
import Base from "./base.vue";
import Vue from "vue";

export const Tooltip = Vue.extend({
  name: "Tooltip",
  extends: Base,
  data: () => ({
    bs: Components.Tooltip
  }),
  props: {
    btnType: { type: Number },
    options: { type: Object },
    type: { type: Number }
  }
});