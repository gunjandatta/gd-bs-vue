import { Components } from "gd-bs";
import Base from "./base.vue";
import Vue from "vue";

export const Alert = Vue.extend({
  name: "Alert",
  extends: Base,
  data: () => ({
    bs: Components.Alert
  }),
  props: {
    content: { type: Object },
    header: { type: String },
    isDismissible: { type: Boolean },
    type: { type: Number }
  }
});