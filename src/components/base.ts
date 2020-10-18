import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({
    template: ''
})
export class Base<T = any> extends Vue {
    @Prop(Function) assignTo: (obj: T) => void;
    @Prop(String) className: string;

    // The bootstrap library component
    protected _bs = null;

    // Component mounted event
    mounted() {
        let updateFl = false;

        // Parse the props
        for (let prop in this.$props) {
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
        this.$data._bs(this.$props);
    }
}