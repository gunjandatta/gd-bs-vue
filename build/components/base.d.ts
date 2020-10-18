import Vue from "vue";
export declare class Base<T = any> extends Vue {
    assignTo: (obj: T) => void;
    className: string;
    protected _bs: any;
    mounted(): void;
}
