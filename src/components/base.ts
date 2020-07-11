import Vue from "vue";

export const Base = Vue.extend({
  name: "Base",
  inheritAttrs: false,
  props: {
    assignTo: { type: Function },
    className: { type: String }
  },
  template: "<div></div>",
  mounted() {
    // Parse the props
    for (let prop in this.$props) {
      // Add a watch for this property
      this.$watch(prop, () => {
        // Clear the element
        while (this.$el.firstChild) {
          this.$el.removeChild(this.$el.firstChild);
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
});