import { Components } from "gd-bs";
import { Base } from "./base";
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
    isReadonly: { type: Boolean },
    isPlainText: { type: Boolean },
    label: { type: String },
    loadingMessage: { type: String },
    name: { type: String },
    onControlRendering: { type: Function },
    onControlRendered: { type: Function },
    onGetValue: { type: Function },
    onValidate: { type: Function },
    required: { type: Boolean },
    title: { type: String },
    type: { type: Number },
    value: { type: Object }
  }
});