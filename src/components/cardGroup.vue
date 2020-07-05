<template></template>

<script>
import { Components } from "gd-bs";
import Base from "./base";

export default {
  name: "CardGroup",
  extends: Base,
  data: () => ({
    bs: Components.CardGroup
  }),
  props: {
    cards: { type: Array },
    isDeck: { type: Boolean }
  }
};
</script>