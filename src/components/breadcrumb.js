import { Components } from "gd-bs";
import { Base } from "./base";
import Vue from "vue";

export const Breadcrumb = Vue.extend({
  name: "Breadcrumb",
  extends: Base,
  data: () => ({
    bs: Components.Breadcrumb
  }),
  props: {
    items: { type: Array },
    onClick: { type: Function }
  }
});