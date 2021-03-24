import { Components } from "gd-bs";
import Base from "./base.vue";
import Vue from "vue";

export const Modal = Vue.extend({
  name: "Offcanvas",
  extends: Base,
  data: () => ({
    bs: Components.Offcanvas
  }),
  props: {
    body: { type: [String, Element] },
    data: { type: Object },
    id: { type: String },
    onRenderBody: { type: Function },
    onRenderHeader: { type: Function },
    options: { type: Object },
    title: { type: String },
    type: { type: Number }
  }
});