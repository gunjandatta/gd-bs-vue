<template></template>

<script>
import { Components } from "gd-bs";
import Base from "./base";

export default {
  name: "Collapse",
  extends: Base,
  data: () => ({
    bs: Components.Collapse
  }),
  props: {
    content: { type: String | Object },
    data: { type: Object },
    id: { type: String },
    isMulti: { type: Boolean },
    onRender: { type: Function },
    options: { type: Object }
  }
};
</script>