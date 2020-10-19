import { Components } from "gd-bs";
import Base from "./base.vue";
import Vue from "vue";

export const Badge = Vue.extend({
  name: "Badge",
  extends: Base,
  data: () => ({
    bs: Components.Badge
  }),
  props: {
    content: { type: Object },
    data: { type: Object },
    header: { type: String },
    href: { type: String },
    isPill: { type: Boolean },
    onClick: { type: Function },
    type: { type: Number }
  }
});