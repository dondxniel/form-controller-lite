import React, { useEffect, useRef, useState } from "react";
import { FormControllerProps } from "../interfaces/components.interface";
import { ChangeEventType, FormEventType } from "../interfaces/types";

export const FormController = ({
	children,
	clearAfterSubmit = false,
	onSubmit = (formData: any, e: FormEventType) => null,
	defaultValues = {},
	handleBeforeChange = (e: ChangeEventType) => true,
	handleAfterChange = (e: ChangeEventType) => null,
	handleBeforeSubmit = (e: FormEventType) => true,
	...props
}: FormControllerProps) => {
	const formRef = useRef<HTMLFormElement>(null);
	const [formData, formDataSetter] = useState({ ...defaultValues });

	// clears the form if the prop receives a true boolean
	const clearAfterSubmitHandler = () => {
		if (clearAfterSubmit) {
			let keys = Object.keys(formData);
			if (keys.length) {
				keys.forEach((item: string) => {
					formDataSetter({
						...formData,
						[item]: null,
					});
				});
			}
		}
	};

	// wraps the submit handler
	const mirrorHandleSubmit = (e: FormEventType) => {
		e.preventDefault();
		if (handleBeforeSubmit(e)) {
			onSubmit(formData, e);
			clearAfterSubmitHandler();
		}
	};

	// calls every time a change event occurs
	const handleChange = (e: any) => {
		if (handleBeforeChange(e))
			formDataSetter({
				...formData,
				[e.target.name]: e.target.value,
			});
		handleAfterChange(e);
	};

	// assign all the required props to the fields
	const handleAssignValues = () => {
		if (formRef.current?.elements) {
			for (const key in formRef.current?.elements) {
				if (formData[key] !== undefined) {
					(formRef.current.elements[key] as HTMLInputElement).value =
						formData[
							(
								formRef.current?.elements[
									key
								] as HTMLInputElement
							).name
						];
				}
			}
		}
	};

	useEffect(() => {
		handleAssignValues();
	}, []);

	return (
		<form
			onChange={handleChange}
			ref={formRef}
			onSubmit={mirrorHandleSubmit}
			{...props}
		>
			{children}
		</form>
	);
};
