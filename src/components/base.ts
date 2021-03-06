import Vue from "vue";

/** Router/Store info to pass on to the VueJS components */
export const setRouter = (router) => { window["GD"]._router = router; }
export const setStore = (store) => { window["GD"]._store = store; }

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
        convertElements(prop, level = 0) {
            // Ensure we haven't passed the max levels
            if (level > 5) { return prop; }

            // Ensure a value exists
            if (prop == null) { return prop; }

            // See if the property is VueJS component
            if (prop.components) {
                // Create an element
                let el = document.createElement("div");

                // Set the vue props
                let props = { el, render: h => h(prop) };
                window["GD"]._router ? props["router"] = window["GD"]._router : null;
                window["GD"]._store ? props["store"] = window["GD"]._store : null;

                // Render the component to it
                setTimeout(() => { new Vue(props); }, 10);

                // Return the element
                return el;
            }

            // Parse the object
            for (let key in prop) {
                // Skip internal objects
                if (key[0] == '_') { continue; }

                // Ensure a value exists
                let value = prop[key];
                if (value == null) { continue; }

                // Ensure this is not a function
                if (typeof (value) === "function") { continue; }

                // See if it's an object
                if (typeof (value) === "object") {
                    // See if this is an array
                    if (typeof (value.length) === "number") {
                        // Parse the items
                        for (let i = 0; i < value.length; i++) {
                            // Convert the VueJS objects to elements
                            let newProp = this.convertElements(value[i], level + 1);
                            if (newProp != value[i]) { value[i] = newProp; }
                        }
                    } else {
                        // Convert the VueJS objects to elements
                        let newProp = this.convertElements(value, level + 1);
                        if (newProp != prop[key]) { prop[key] = newProp; }
                    }
                }
            }

            // Return the prop
            return prop;
        }
    },
    mounted() {
        let updateFl = false;

        // Convert the VueJS components to elements
        let props = this.convertElements(this.$props);

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