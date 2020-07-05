<template></template>

<script>
import { Components } from "gd-bs";
import Base from "./base";

export default {
  name: "ListBox",
  extends: Base,
  data: () => ({
    bs: Components.ListBox
  }),
  props: {
    label: { type: String },
    id: { type: String },
    items: { type: Array },
    multi: { type: Boolean },
    placeholder: { type: String },
    onChange: { type: Function },
    value: { type: String | Array }
  }
};
</script>