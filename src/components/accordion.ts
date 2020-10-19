import { Components } from "gd-bs";
import Base from "./base.vue";
import Vue from "vue";

export const Accordion = Vue.extend({
  name: "Accordion",
  extends: Base,
  data: () => ({
    bs: Components.Accordion
  }),
  props: {
    id: { type: String },
    items: { type: Array },
    options: { type: Object }
  }
});