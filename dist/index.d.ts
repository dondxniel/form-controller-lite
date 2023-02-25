import { ReactNode, FormEvent, ChangeEvent, HTMLProps } from 'react';

type Element = ReactNode;
type FormEventType = FormEvent<HTMLFormElement>;
type ChangeEventType = ChangeEvent<HTMLInputElement>;

interface FormControllerProps extends Omit<HTMLProps<HTMLFormElement>, "onSubmit"> {
    children: Element;
    onSubmit: (event: FormEventType, formData: any) => void;
    defaultValues?: any;
    handleBeforeChange?: (event: ChangeEventType) => boolean;
    handleAfterChange?: (event: ChangeEventType) => void;
    handleBeforeSubmit?: (event: FormEventType) => boolean;
    handleAfterSubmit?: (event: FormEventType) => void;
}

declare const FormController: ({ children, onSubmit, defaultValues, handleBeforeChange, handleAfterChange, handleBeforeSubmit, handleAfterSubmit, ...props }: FormControllerProps) => JSX.Element;

export { FormController };
