<template></template>

<script>
import { Components } from "gd-bs";
import Base from "./base";

export default {
  name: "Form",
  extends: Base,
  data: () => ({
    bs: Components.Form
  }),
  props: {
    controls: { type: Array },
    rowClassName: { type: String },
    rows: { type: Array },
    onControlRendering: { type: Function },
    onControlRendered: { type: Function },
    onRendered: { type: Function },
    value: { type: Object }
  }
};
</script>