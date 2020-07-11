import { Components } from "gd-bs";
import Base from "./base.vue";
import Vue from "vue";

export const ProgressGroup = Vue.extend({
  name: "ProgressGroup",
  extends: Base,
  data: () => ({
    bs: Components.ProgressGroup
  }),
  props: {
    isMultiple: { type: Boolean },
    progressbars: { type: Array }
  }
});