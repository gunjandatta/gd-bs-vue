import { Components } from "gd-bs";
import Base from "./base.vue";
import Vue from "vue";

export const CheckboxGroup = Vue.extend({
  name: "CheckboxGroup",
  extends: Base,
  data: () => ({
    bs: Components.CheckboxGroup
  }),
  props: {
    colSize: { type: Number },
    hideLabel: { type: Boolean },
    isInline: { type: Boolean },
    isReadonly: { type: Boolean },
    label: { type: String },
    items: { type: Array },
    multi: { type: Boolean },
    onRender: { type: Function },
    onChange: { type: Function },
    renderRow: { type: Boolean },
    title: { type: String },
    type: { type: Number },
    value: { type: Object }
  }
});