import { Components } from "gd-bs";
import Base from "./base.vue";
import Vue from "vue";

export const Navbar = Vue.extend({
  name: "Navbar",
  extends: Base,
  data: () => ({
    bs: Components.Navbar
  }),
  props: {
    brand: { type: String },
    brandUrl: { type: String },
    enableScrolling: { type: Boolean },
    enableSearch: { type: Boolean },
    id: { type: String },
    items: { type: Array },
    itemsEnd: { type: Array },
    onClick: { type: Function },
    searchBox: { type: Object },
    type: { type: Number }
  }
});