import Vue from "vue";
export declare class Base<T = any> extends Vue {
    assignTo: (obj: T) => void;
    className: string;
    protected _bs: any;
    mounted(): void;
}
declare const _default: {
    name: string;
    inheritAttrs: boolean;
    props: {
        assignTo: {
            type: FunctionConstructor;
        };
        className: {
            type: StringConstructor;
        };
    };
    mounted(): void;
};
/**
 * Base Template
 */
export default _default;
