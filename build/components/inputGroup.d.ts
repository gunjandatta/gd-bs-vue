import { Components } from "gd-bs";
import { Base } from "./base";
export declare class InputGroup extends Base<Components.IInputGroup> {
    appendedButtons: Array<Components.IButtonProps>;
    appendedLabel: string;
    formFl: boolean;
    id: string;
    isLarge: boolean;
    isReadonly: boolean;
    isSmall: boolean;
    label: string;
    max: number;
    min: number;
    onClear: () => void;
    onChange: (value?: string, ev?: Event) => void;
    placeholder: string;
    prependedButtons: Array<Components.IButtonProps>;
    prependedLabel: string;
    rows: number;
    step: number;
    title: string;
    type: number;
    value: string;
    constructor();
}
