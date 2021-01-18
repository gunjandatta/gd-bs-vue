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
        convertElements(prop) {
            // Ensure a value exists
            if (prop == null) { return; }

            // See if the property is VueJS component
            if (prop.components) {
                // Create an element
                let el = document.createElement("div");

                // Render the component to it
                new Vue({ el, render: h => h(prop) });

                // Return the element
                return el;
            }

            // Parse the object
            for (let key in prop) {
                // Ensure a value exists
                let value = prop[key];
                if (value == null) { continue; }

                // Ensure this is not a function
                if (typeof (value) === "function") { continue; }

                // See if it's an object
                if (typeof (value) === "object") {
                    // Convert the elements
                    prop[key] = this.convertElements(value);
                }
            }

            // Return the prop
            return prop;
        }
    },
    mounted() {
        let updateFl = false;

        // Convert the VueJS components to elements
        //let props = this.convertElements(this.$props);

        // Parse the props
        for (let prop in props) {
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
                        this.$data.bs(props);
                    }, 100);
                }
            });
        }
        // Set the element
        props.el = this.$el.nodeType == Node.COMMENT_NODE ? this.$el.parentElement : this.$el;
        // Render the component
        this.$data.bs(props);
    }
}