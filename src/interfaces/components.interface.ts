import { HTMLProps } from "react";
import { ChangeEventType, Element, FormEventType } from "./types";

export interface FormControllerProps
	extends Omit<HTMLProps<HTMLFormElement>, "onSubmit"> {
	// * Compulsory props
	children: Element;
	onSubmit?: (event: FormEventType, formData: any) => void;

	// * Optional props
	clearAfterSubmit: boolean;
	defaultValues?: any;
	handleBeforeChange?: (event: ChangeEventType) => boolean;
	handleAfterChange?: (event: ChangeEventType) => void;
	handleBeforeSubmit?: (event: FormEventType) => boolean;
}
