<template></template>

<script>
import { Components } from "gd-bs";
import Base from "./base";

export default {
  name: "Jumbotron",
  extends: Base,
  data: () => ({
    bs: Components.Jumbotron
  }),
  props: {
    content: { type: String | Element },
    isFluid: { type: Boolean },
    lead: { type: String },
    onRenderContent: { type: Function },
    title: { type: String }
  }
};
</script>