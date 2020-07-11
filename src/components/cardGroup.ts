import { Components } from "gd-bs";
import Base from "./base.vue";
import Vue from "vue";

export const CardGroup = Vue.extend({
  name: "CardGroup",
  extends: Base,
  data: () => ({
    bs: Components.CardGroup
  }),
  props: {
    cards: { type: Array },
    isDeck: { type: Boolean }
  }
});