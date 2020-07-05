<template></template>

<script>
import { Components } from "gd-bs";
import Base from "./base";

export default {
  name: "Toolbar",
  extends: Base,
  data: () => ({
    bs: Components.Toolbar
  }),
  props: {
    items: { type: Array },
    spacing: { type: Number }
  }
};
</script>