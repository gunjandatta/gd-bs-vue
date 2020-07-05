<template></template>

<script>
import { Components } from "gd-bs";
import Base from "./base";

export default {
  name: "Spinner",
  extends: Base,
  data: () => ({
    bs: Components.Spinner
  }),
  props: {
    isGrowing: { type: Boolean },
    isSmall: { type: Boolean },
    text: { type: String },
    type: { type: Number }
  }
};
</script>