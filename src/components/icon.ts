import { Icons } from "gd-bs";
import Base from "./base.vue";
import Vue from "vue";

export const Icon = Vue.extend({
  name: "Icon",
  extends: Base,
  computed: {
    bsInit() {
      this.$el.appendChild(Icons(this.$props.type, this.$props.height, this.$props.width));
    }
  },
  props: {
    height: { type: Number },
    type: { type: Number },
    width: { type: Number }
  }
});