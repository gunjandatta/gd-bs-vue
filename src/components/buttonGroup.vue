<template></template>

<script>
import { Components } from "gd-bs";
import Base from "./base";

export default {
  name: "ButtonGroup",
  extends: Base,
  data: () => ({
    bs: Components.ButtonGroup
  }),
  props: {
    buttons: { type: Array },
    buttonType: { type: Number },
    id: { type: String },
    isLarge: { type: Boolean },
    isSmall: { type: Boolean },
    isVertical: { type: Boolean },
    label: { type: String }
  }
};
</script>