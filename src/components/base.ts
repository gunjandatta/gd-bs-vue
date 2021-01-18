import Vue from "vue";

/**
 * Base Template
 */
export default {
    name: "Base",
    inheritAttrs: false,
    props: {
        assignTo: { type: Function },
        className: { type: String },
    },
    methods: {
        convertElements(props) {
            // Parse the props
            for (let prop in props) {
                // Ensure a value exists
                let value = props[prop];
                if (value == null) { continue; }

                // See if this is an array
                if (typeof (value) !== "string" && value.length > 0) {
                    // Convert the element
                    this.convertElements(value);
                    continue;
                }

                // See if the property is VueJS component
                if (value.components) {
                    // Create an element
                    let el = document.createElement("div");

                    // Render the component to it
                    new Vue({ el, render: h => h(value) });

                    // Set the property
                    props[prop] = el;
                }
            }
        }
    },
    mounted() {
        let updateFl = false;

        // Parse the props
        for (let prop in this.$props) {
            // Convert the VueJS components to elements
            this.convertElements(prop);

            // Add a watch for this property
            this.$watch(prop, () => {
                // See if an update is not taking place
                if (!updateFl) {
                    // Set the flag
                    updateFl = true;
                    // Wait for any other changes to occur before updating the element
                    setTimeout(() => {
                        // Clear the element
                        while (this.$el.firstChild) {
                            // Remove the child
                            this.$el.removeChild(this.$el.firstChild);
                        }
                        // Set the flag
                        updateFl = false;
                        // Re-render the component
                        this.$data.bs(this.$props);
                    }, 100);
                }
            });
        }
        // Set the element
        this.$props.el = this.$el.nodeType == Node.COMMENT_NODE ? this.$el.parentElement : this.$el;
        // Render the component
        this.$data.bs(this.$props);
    }
}