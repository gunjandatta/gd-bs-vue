<template></template>

<script>
import { Components } from "gd-bs";
import Base from "./base";

export default {
  name: "ListGroup",
  extends: Base,
  data: () => ({
    bs: Components.ListGroup
  }),
  props: {
    colWidth: { type: Number },
    fadeTabs: { type: Boolean },
    isFlush: { type: Boolean },
    isHorizontal: { type: Boolean },
    isTabs: { type: Boolean },
    items: { type: Array }
  }
};
</script>