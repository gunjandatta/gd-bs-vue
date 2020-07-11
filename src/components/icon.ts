import { Icons } from "gd-bs";
import Base from "./base.vue";
import Vue from "vue";

export const Icon = Vue.extend({
  name: "Icon",
  extends: Base,
  data: {
    render: (props) => {
      return Icons(props.type, props.height, props.width);
    }
  },
  props: {
    height: { type: Number },
    type: { type: Number },
    width: { type: Number }
  }
});