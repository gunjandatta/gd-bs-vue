import { Components } from "gd-bs";
import Base from "./base.vue";
import Vue from "vue";

export const Dropdown = Vue.extend({
  name: "Dropdown",
  extends: Base,
  data: () => ({
    bs: Components.Dropdown
  }),
  props: {
    btnClassName: { type: String },
    dropLeft: { type: Boolean },
    dropRight: { type: Boolean },
    dropUp: { type: Boolean },
    formFl: { type: Boolean },
    id: { type: String },
    isDark: { type: Boolean },
    isDatalist: { type: Boolean },
    isReadonly: { type: Boolean },
    isSplit: { type: Boolean },
    items: { type: Array },
    label: { type: String },
    menuOnly: { type: Boolean },
    multi: { type: Boolean },
    navFl: { type: Boolean },
    onChange: { type: Function },
    setLabelToValue: { type: Boolean },
    title: { type: String },
    type: { type: Number },
    value: { type: Object }
  }
});