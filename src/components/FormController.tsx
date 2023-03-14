import React, { useEffect, useRef, useState } from "react";
import { FormControllerProps } from "../interfaces/components.interface";
import { ChangeEventType, FormEventType } from "../interfaces/types";

export const FormController = ({
	children,
	onSubmit = (formData: any, e: FormEventType) => null,
	defaultValues = {},
	handleBeforeChange = (e: ChangeEventType) => true,
	handleAfterChange = (e: ChangeEventType) => null,
	handleBeforeSubmit = (e: FormEventType) => true,
	...props
}: FormControllerProps) => {
	const formRef = useRef<HTMLFormElement>(null);
	const [formData, formDataSetter] = useState({ ...defaultValues });
	const mirrorHandleSubmit = (e: FormEventType) => {
		e.preventDefault();
		if (handleBeforeSubmit(e)) onSubmit(formData, e);
	};
	const handleChange = (e: any) => {
		if (handleBeforeChange(e))
			formDataSetter({
				...formData,
				[e.target.name]: e.target.value,
			});
		handleAfterChange(e);
	};
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
	});
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
