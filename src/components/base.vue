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
    // Parse the props
    for (let prop in this.$props) {
      // Add a watch for this property
      this.$watch(prop, () => {
        // Clear the element
        while (el.firstChild) {
          el.removeChild(el.firstChild);
        }

        // Re-render the component
        this.$data.bs(this.$props);
      });
    }

    // Set the element
    this.$props.el = this.$el;

    // Render the component
    this.$data.bs(this.$props);
  }
};
</script>