<template></template>

<script>
import { Components } from "gd-bs";
import Base from "./base";

export default {
  name: "Tooltip",
  extends: Base,
  data: () => ({
    bs: Components.Tooltip
  }),
  props: {
    btnType: { type: Number },
    options: { type: Object },
    text: { type: String },
    type: { type: Number }
  }
};
</script>