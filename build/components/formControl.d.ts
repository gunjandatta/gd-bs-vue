import { Components } from "gd-bs";
import { Base } from "./base";
export declare class FormControl extends Base<Components.IFormControl> {
    controlClassName: string;
    data: any;
    description: string;
    errorMessage: string;
    isReadonly: boolean;
    isPlainText: boolean;
    label: string;
    loadingMessage: string;
    name: string;
    onControlRendering: (control: Components.IFormControlProps) => void | PromiseLike<Components.IFormControlProps>;
    onControlRendered: (control: Components.IFormControl) => void | PromiseLike<Components.IFormControl>;
    onGetValue: (control: Components.IFormControlProps) => any;
    onValidate: (control: Components.IFormControlProps, value: Components.IFormControlValidationResult) => boolean | Components.IFormControlValidationResult;
    required: boolean;
    title: string;
    type: number;
    value: any;
    constructor();
}
