import { Components } from "gd-bs";
import Base from "./base.vue";
import Vue from "vue";

export const Collapse = Vue.extend({
  name: "Collapse",
  extends: Base,
  data: () => ({
    bs: Components.Collapse
  }),
  props: {
    content: { type: [String, Object] },
    data: { type: Object },
    id: { type: String },
    isMulti: { type: Boolean },
    onRender: { type: Function },
    options: { type: Object }
  }
});