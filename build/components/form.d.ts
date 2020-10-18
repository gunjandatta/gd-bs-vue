import { Components } from "gd-bs";
import { Base } from "./base";
export declare class Form extends Base<Components.IForm> {
    controls: Array<Components.IFormControlProps>;
    rowClassName: string;
    rows: Array<Components.IFormRow>;
    onControlRendering: (control: Components.IFormControlProps) => void | PromiseLike<Components.IFormControlProps>;
    onControlRendered: (control: Components.IFormControl) => void | PromiseLike<Components.IFormControl>;
    onRendered: (controls: Array<Components.IFormControl>) => void;
    value: any;
    constructor();
}
