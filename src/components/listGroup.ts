import { Components } from "gd-bs";
import Base from "./base.vue";
import Vue from "vue";

export const ListGroup = Vue.extend({
  name: "ListGroup",
  extends: Base,
  data: () => ({
    bs: Components.ListGroup
  }),
  props: {
    colWidth: { type: Number },
    fadeTabs: { type: Boolean },
    isFlush: { type: Boolean },
    isHorizontal: { type: Boolean },
    isTabs: { type: Boolean },
    items: { type: Array }
  }
});