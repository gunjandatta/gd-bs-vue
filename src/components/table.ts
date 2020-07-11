import { Components } from "gd-bs";
import { Base } from "./base";
import Vue from "vue";

export const Table = Vue.extend({
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
});