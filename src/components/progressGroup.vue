<template></template>

<script>
import { Components } from "gd-bs";
import Base from "./base";

export default {
  name: "ProgressGroup",
  extends: Base,
  data: () => ({
    bs: Components.ProgressGroup
  }),
  props: {
    isMultiple: { type: Boolean },
    progressbars: { type: Array }
  }
};
</script>