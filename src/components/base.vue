<template></template>

<script>
import Vue from "vue";

export default {
  name: "Base",
  inheritAttrs: false,
  props: {
    assignTo: { type: Function },
    className: { type: String }
  },
  mounted() {
    // Set the element
    this.$props.el = this.$el;

    // Render the component
    this.$data.bs(this.$props);
  }
};
</script>