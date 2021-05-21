import { Components } from "gd-bs";
import Base from "./base.vue";
import Vue from "vue";

export const Button = Vue.extend({
  name: "Button",
  extends: Base,
  data: () => ({
    bs: Components.Button
  }),
  props: {
    badge: { type: Object },
    controls: { type: [String, Array] },
    data: { type: Object },
    dismiss: { type: String },
    href: { type: String },
    iconSize: { type: Number },
    iconType: { type: Function },
    id: { type: String },
    isBlock: { type: Boolean },
    isDisabled: { type: Boolean },
    isExpanded: { type: Boolean },
    isLarge: { type: Boolean },
    isLink: { type: Boolean },
    isSmall: { type: Boolean },
    onClick: { type: Function },
    spinnerProps: { type: Object },
    tabIndex: { type: Number },
    target: { type: String },
    text: { type: String },
    title: { type: String },
    toggle: { type: String },
    toggleObj: { type: Object },
    trigger: { type: String },
    type: { type: Number }
  }
});