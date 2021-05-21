import { Components } from "gd-bs";
import Base from "./base.vue";
import Vue from "vue";

export const Progress = Vue.extend({
  name: "Progress",
  extends: Base,
  data: () => ({
    bs: Components.Progress
  }),
  props: {
    isAnimated: { type: Boolean },
    isStriped: { type: Boolean },
    label: { type: String },
    max: { type: Number },
    min: { type: Number },
    size: { type: Number },
    type: { type: Number }
  }
});