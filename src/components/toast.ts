import { Components } from "gd-bs";
import Base from "./base.vue";
import Vue from "vue";

export const Toast = Vue.extend({
  name: "Toast",
  extends: Base,
  data: () => ({
    bs: Components.Toast
  }),
  props: {
    body: { type: Element },
    data: { type: Object },
    headerImgClass: { type: String },
    headerImgSrc: { type: String },
    headerText: { type: String },
    hideCloseButton: { type: Boolean },
    mutedText: { type: String },
    options: { type: Object },
    onClick: { type: Function },
    onRenderBody: { type: Function },
    onRenderHeader: { type: Function }
  }
});