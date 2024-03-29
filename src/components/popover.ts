import { Components } from "gd-bs";
import Base from "./base.vue";
import Vue from "vue";

export const Popover = Vue.extend({
  name: "Popover",
  extends: Base,
  data: () => ({
    bs: Components.Popover
  }),
  props: {
    btnProps: { type: Object },
    isDismissible: { type: Boolean },
    options: { type: Object },
    target: { type: Object },
    title: { type: Object },
    type: { type: Number }
  }
});