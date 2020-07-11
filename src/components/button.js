import { Components } from "gd-bs";
import { Base } from "./base";
import Vue from "vue";

export const Button = Vue.extend({
  name: "Button",
  extends: Base,
  data: () => ({
    bs: Components.Button
  }),
  props: {
    badge: { type: Object },
    controls: { type: Array },
    data: { type: Object },
    href: { type: String },
    iconSize: { type: Number },
    iconType: { type: Number },
    id: { type: String },
    isBlock: { type: Boolean },
    isDisabled: { type: Boolean },
    isExpanded: { type: Boolean },
    isLarge: { type: Boolean },
    isLink: { type: Boolean },
    isSmall: { type: Boolean },
    onClick: { type: Function },
    spinnerProps: { type: Object },
    target: { type: String },
    text: { type: String },
    title: { type: String },
    toggle: { type: String },
    trigger: { type: String },
    type: { type: Number }
  }
});