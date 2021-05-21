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
    content: { type: [String, Object] },
    data: { type: [String, Object] },
    header: { type: String },
    isDismissible: { type: Boolean },
    onClose: { type: Function },
    type: { type: Number }
  }
});