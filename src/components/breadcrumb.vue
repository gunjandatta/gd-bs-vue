<template></template>

<script>
import { Components } from "gd-bs";
import Base from "./base";

export default {
  name: "Breadcrumb",
  extends: Base,
  data: () => ({
    bs: Components.Breadcrumb
  }),
  props: {
    items: { type: Array },
    onClick: { type: Function }
  }
};
</script>