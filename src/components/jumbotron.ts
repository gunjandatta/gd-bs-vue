import { Components } from "gd-bs";
import Base from "./base.vue";
import Vue from "vue";

export const Jumbotron = Vue.extend({
  name: "Jumbotron",
  extends: Base,
  data: () => ({
    bs: Components.Jumbotron
  }),
  props: {
    content: { type: [String, Element] },
    isFluid: { type: Boolean },
    lead: { type: String },
    onRenderContent: { type: Function },
    title: { type: String }
  }
});