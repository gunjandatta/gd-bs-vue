<template></template>

<script>
import { Components } from "gd-bs";
import Base from "./base";

export default {
  name: "Progress",
  extends: Base,
  data: () => ({
    bs: Components.Progress
  }),
  props: {
    isAnimated: { type: Boolean },
    isStriped: { type: Boolean },
    label: { type: String },
    max: { type: Number },
    min: { type: Number },
    size: { type: Number }
  }
};
</script>