<template></template>

<script>
import { Components } from "gd-bs";
import Base from "./base";

export default {
  name: "Card",
  extends: Base,
  data: () => ({
    bs: Components.Card
  }),
  props: {
    body: { type: Array },
    footer: { type: Object },
    header: { type: Object },
    imgBottom: { type: Object },
    imgTop: { type: Object },
    onClick: { type: Function }
  }
};
</script>