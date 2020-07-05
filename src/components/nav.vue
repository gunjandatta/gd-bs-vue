<template></template>

<script>
import { Components } from "gd-bs";
import Base from "./base";

export default {
  name: "Nav",
  extends: Base,
  data: () => ({
    bs: Components.Nav
  }),
  props: {
    data: { type: Object },
    enableFill: { type: Boolean },
    fadeTabs: { type: Boolean },
    id: { type: String },
    items: { type: Array },
    isJustified: { type: Boolean },
    isPills: { type: Boolean },
    isTabs: { type: Boolean },
    isVertical: { type: Boolean }
  }
};
</script>