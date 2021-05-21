import { Components } from "gd-bs";
import Base from "./base.vue";
import Vue from "vue";

export const Modal = Vue.extend({
  name: "Modal",
  extends: Base,
  data: () => ({
    bs: Components.Modal
  }),
  props: {
    body: { type: [String, Element] },
    disableFade: { type: Boolean },
    footer: { type: [String, Element] },
    hideCloseButton: { type: Boolean },
    id: { type: String },
    isCentered: { type: Boolean },
    onClose: { type: Function },
    onRenderBody: { type: Function },
    onRenderFooter: { type: Function },
    options: { type: Object },
    title: { type: String },
    type: { type: Number }
  }
});