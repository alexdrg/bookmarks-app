export type FiltersParams = Record<string, string | number | boolean>;

export type FormField = {
    name: string;
    type: 'text' | 'group';
    label?: string;
    placeholder?: string;
    errorMessage?: string;
    validators?: ValidatorConfig;
    children?: FormField[];
};
  
export type ValidatorConfig = {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: string;
};