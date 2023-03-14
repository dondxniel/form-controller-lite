![enter image description here](https://user-images.githubusercontent.com/66220736/221665090-c93aff7b-fe49-47cb-96c6-13bfa1cfa2b1.png)

# FORM CONTROLLER LITE

Handling form state and events with React.

## INTRO

Form Controller Lite is a light-weight form wrapper for react that reduces the boiler plate required to create simplistic forms. The motivation behind the creation of Form Controller Lite was my deep disgust for the verbose-ness of form handling in react.

## INSTALLATION

With npm:
` npm install form-controller-lite`

With yarn:
` yarn add form-controller-lite`

## BASIC USAGE

Below is how the FormController component is used in its simplest form. There are 3 steps and they are numbered in the comments.

```jsx
import { FormController } from "form-controller-lite";

function App() {
	// 1. Define your submit handler.
	const handleSubmit = (values) => {
		/* 
			The properties of the values object reflect 
			the names of the input fields. For example: 
			values = {
				email: '', password: ''
			}
		*/
		// Handle your submit event
	};
	return (
		// 2. Define FormController component and pass your submit handler function.
		<FormController onSubmit={handleSubmit}>
			{/* 3. Create your input fields and pass the name attribute */}
			<input name="email" />
			<input name="password" />
		</FormController>
	);
}
```

## Props

Below are the props of the `FormController` component and how they are used.

### 1. `onSubmit: Function`

This refers to the form's submit handler. Any function you pass in here will get triggered when the form submitted. You don't have to run the `e.preventDefault()` as this does this for you by default. The function passes a parameter that carries an object where the keys are the names of the input fields and the values are the values entered in the forms.
<b>Example: </b>

```jsx
function  App() {
	const handleSubmit = (values) => {
		const response = await loginFunction(values);
	}
	return (
		<FormController onSubmit={handleSubmit}>
			<input name="email" />
			<input name="password" />
		</FormController>
	);
}
```

The `values` object will go as follows:

```
{
	email: 'whatever-the-user-typed@example.com',
	password: "user's password"
}
```

### 2. `defaultValues: Object`

This addresses situations where you might want your input fields to be rendered with default values. The properties of the object (`defaultValues`) should correspond to the name of the input fields. Meaning that if there is an input field with name '`firstName`', to assign a default value to that input field, you must have a property in the `defaultValues` object called `firstName`.  
<b>Example: </b>

```jsx
function App() {
	const defaultValues = {
		userName: "johndoe",
	};
	return (
		<FormController defaultValues={defaultValues}>
			<input name="userName" />
		</FormController>
	);
}
```

### 3. `handleAfterChange: Function`

This addresses situations where you might want to trigger certain actions after users perform change events on the form, like typing or selecting a radio button, or checkbox. You might want to upload the value to a server for a suggestion search functionality or something similar to that. The function basically triggers when a user performs change actions on the form.  
<b>Example: </b>

```jsx
function App() {
	const afterChangeHandler = (e) => {
		const { name, value } = e.target;
		if (name === "userName") customSearchFunction(value);
	};
	return (
		<FormController handleAfterChange={afterChangeHandler}>
			<input name="userName" />
		</FormController>
	);
}
```

### 4. `handleBeforeChange: Function`

This addresses situations where you might want to intercept user-triggered change events and trigger certain actions before these events reflect. The function triggers right before the user's change reflects and returns a boolean to verify the reflection before it happens. A typical usecase would be input validation. If you have a phone number field that you want to be treated as a text field, you wouldn't want users to be able to type in anything other than numbers, so this prop is optimal for intercepting the character input before it is saved to state.  
<b>Example: </b>

```jsx
function App() {
	const beforeChangeHandler = (e) => {
		const { name, value } = e.target;
		if (name === "mobileNumber") return /^[0-9]*$/.test(value);
	};
	return (
		<FormController handleBeforeChange={beforeChangeHandler}>
			<input name="mobileNumber" />
		</FormController>
	);
}
```

The code above checks if the character that's being entered is a number and returns true, otherwise, it returns false.

### 5. `handleBeforeSubmit: Function`

This addresses situations where you might want to intercept the submit event and trigger certain actions before moving to the submit handler. The function triggers right before the submit handler and returns a boolean to verify before the form submits. A typical usecase would be input validation. If you want to run validation checks on multiple input fields before the form is submitted, this is where it should happen.
<b>Example: </b>

```jsx
function App() {
	const beforeSubmitHandler = (values) => {
		const { email, password } = values;
		if (email === "" || password === "") {
			window.alert("One of or both input fields are empty.");
			return false;
		}
		return true;
	};
	return (
		<FormController handleBeforeSubmit={beforeSubmitHandler}>
			<input name="email" />
			<input name="password" />
		</FormController>
	);
}
```
