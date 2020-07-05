<template></template>

<script>
import { Components } from "gd-bs";
import Base from "./base";

export default {
  name: "Table",
  extends: Base,
  data: () => ({
    bs: Components.Table
  }),
  props: {
    columns: { type: Array },
    onClickCell: { type: Function },
    onClickHeader: { type: Function },
    onRenderCell: { type: Function },
    onRenderHeaderCell: { type: Function },
    onRenderHeaderRow: { type: Function },
    onRenderRow: { type: Function },
    rows: { type: Array }
  }
};
</script>