
![enter image description here](https://user-images.githubusercontent.com/66220736/221665090-c93aff7b-fe49-47cb-96c6-13bfa1cfa2b1.png)

# FORM CONTROLLER LITE
Handling form state and events with React.

## INTRO
Form Controller Lite is a light-weight form wrapper for react that reduces the boiler plate required to create simplistic forms. The motivation behind the creation of Form Controller Lite was my deep disgust for the verbose-ness of form handling in react. 

## INSTALLATION
With npm: 
``` npm install form-controller-lite```

With yarn:
``` yarn add form-controller-lite```

## COMPONENTS 

###  `FormController` 
Below is how the FormController component is used  in its simplest form.
```jsx
import { FormController } from  "form-controller-lite";

function  App() {
	const handleSubmit = (values) => {
		/* 
			The properties of the values object 
			reflect the names of the input fields
			Example: 
			values = {
				email: '', password: ''
			}
		*/
		// Handle your submit event
	}
	return (
		<FormController onSubmit={handleSubmit}>
			<input name="email" />
			<input name="password" />
		</FormController>
	);
}
```

## API

### `FormController`
|Properties| Required | Example | Description |
|--|--|--|--|
| `defaultValues` | `false` | `{` <br> ` email: 'johndoe@example.com',`  <br> `password: '1234'` <br> ` }` | This refers to the default values of the form's input fields. The properties of the object has to correspond to the names of the input fields. |
|`handleAfterChange`| `false` |`(e) => { console.log(e.target.value) }`| Runs after an input event. |
|`handleAfterSubmit`| `false` |`(e) => { console.log(e.target.value) }` | Runs after your submit event is completed.
|`handleBeforeChange`| `false` |`(e) => true` | Runs before an input change is actualized. It cancels the input change if the function returns false and allows it if the function returns true. This can be used for input validation while typing.|
|`handleBeforeSubmit`|`false`|`(e) => true` |Runs before the submit handler that you passed in `onSubmit` prop is actualized. It cancels the submit handler if the function returns false and allows it if the function returns true. This can be used for input validation before submitting. 
