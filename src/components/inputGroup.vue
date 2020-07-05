<template></template>

<script>
import { Components } from "gd-bs";
import Base from "./base";

export default {
  name: "InputGroup",
  extends: Base,
  data: () => ({
    bs: Components.InputGroup
  }),
  props: {
    appendedButtons: { type: Array },
    appendedLabel: { type: String },
    formFl: { type: Boolean },
    id: { type: String },
    isLarge: { type: Boolean },
    isReadonly: { type: Boolean },
    isSmall: { type: Boolean },
    label: { type: String },
    max: { type: Number },
    min: { type: Number },
    onClear: { type: Function },
    onChange: { type: Function },
    placeholder: { type: String },
    prependedButtons: { type: Array },
    prependedLabel: { type: String },
    rows: { type: Number },
    step: { type: Number },
    title: { type: String },
    type: { type: Number },
    value: { type: String }
  }
};
</script>