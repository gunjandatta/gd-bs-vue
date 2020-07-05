<template></template>

<script>
import { Components } from "gd-bs";
import Base from "./base";

export default {
  name: "Accordion",
  extends: Base,
  data: () => ({
    bs: Components.Accordion
  }),
  props: {
    id: { type: String },
    items: { type: Array },
    options: { type: Object }
  }
};
</script>