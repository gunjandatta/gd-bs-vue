import { Icons } from "gd-bs";
import Vue from "vue";
import Base from "./base.vue";

export const Icon = Vue.extend({
  name: "Icon",
  extends: Base,
  props: {
    height: { type: Number },
    type: { type: Number },
    width: { type: Number }
  },
  data() {
    return {
      bs(props) {
        // Render the icon
        props.el.appendChild(Icons(props.type, props.height, props.width));
      }
    }
  }
});