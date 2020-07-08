<template></template>

<script>
import { Components } from "gd-bs";
import Base from "./base";

export default {
  name: "Alert",
  extends: Base,
  data: () => ({
    bs: Components.Alert
  }),
  watch: {
    content: () => {
      this.$forceUpdate();
    },
    header: () => {
      this.$forceUpdate();
    },
    isDismissible: () => {
      this.$forceUpdate();
    },
    type: () => {
      this.$forceUpdate();
    }
  },
  props: {
    content: { type: String | Object },
    header: { type: String },
    isDismissible: { type: Boolean },
    type: { type: Number }
  }
};
</script>