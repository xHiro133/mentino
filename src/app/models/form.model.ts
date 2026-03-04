export enum ControlType {
    TEXT,
    PASSWORD,
    EMAIL,
    RADIO
}

export interface Control {
    selector: string;
    type: ControlType;
    placeholder?: string;
    value?: any;
    state?: ValidityState;
    valid?: boolean;
    required?: boolean;
    options?: { value: string | number, label: string }[];
    defaultValue?: any;
}

export interface MyForm {
    controls: Control[];
    valid?: boolean;
    value?: { [key: string]: any };
}