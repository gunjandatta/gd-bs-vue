<template></template>

<script>
import { Components } from "gd-bs";
import Base from "./base";

export default {
  name: "Popover",
  extends: Base,
  data: () => ({
    bs: Components.Popover
  }),
  props: {
    btnProps: { type: Object },
    isDismissible: { type: Boolean },
    options: { type: Object },
    target: { type: Object },
    type: { type: Number }
  }
};
</script>