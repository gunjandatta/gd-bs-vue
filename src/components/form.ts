import { Components } from "gd-bs";
import Base from "./base.vue";
import Vue from "vue";

export const Form = Vue.extend({
  name: "Form",
  extends: Base,
  data: () => ({
    bs: Components.Form
  }),
  props: {
    controls: { type: Array },
    groupClassName: { type: String },
    isFloating: { type: Boolean },
    rowClassName: { type: String },
    rows: { type: Array },
    onControlRendering: { type: Function },
    onControlRendered: { type: Function },
    onRendered: { type: Function },
    validationType: { type: Number },
    value: { type: Object }
  }
});