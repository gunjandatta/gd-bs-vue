import { Components } from "gd-bs";
import Base from "./base.vue";
import Vue from "vue";

export const FormControl = Vue.extend({
  name: "FormControl",
  extends: Base,
  data: () => ({
    bs: Components.FormControl
  }),
  props: {
    controlClassName: { type: String },
    data: { type: Object },
    description: { type: String },
    errorMessage: { type: String },
    id: { type: String },
    isReadonly: { type: Boolean },
    isPlainText: { type: Boolean },
    items: { type: Array },
    label: { type: String },
    loadingMessage: { type: String },
    max: { type: Number },
    min: { type: Number },
    name: { type: String },
    onControlRendering: { type: Function },
    onChange: { type: Function },
    onControlRendered: { type: Function },
    onGetValue: { type: Function },
    onValidate: { type: Function },
    placeholder: { type: String },
    rows: { type: Number },
    step: { type: Number },
    required: { type: Boolean },
    title: { type: String },
    type: { type: Number },
    validationType: { type: Number },
    value: { type: [String, Number, Object] }
  }
});