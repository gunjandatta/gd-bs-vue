import { Components } from "gd-bs";
import Base from "./base.vue";
import Vue from "vue";

export const Toolbar = Vue.extend({
  name: "Toolbar",
  extends: Base,
  data: () => ({
    bs: Components.Toolbar
  }),
  props: {
    items: { type: Array },
    spacing: { type: Number }
  }
});