import { Components } from "gd-bs";
import Base from "./base.vue";
import Vue from "vue";

export const ListBox = Vue.extend({
  name: "ListBox",
  extends: Base,
  data: () => ({
    bs: Components.ListBox
  }),
  props: {
    label: { type: String },
    id: { type: String },
    items: { type: Array },
    multi: { type: Boolean },
    placeholder: { type: String },
    onChange: { type: Function },
    value: { type: [String, Array] }
  }
});