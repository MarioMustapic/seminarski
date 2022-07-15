import "./InputFormField.styles.scss"

import { InputElement } from "../InputElement/InputElement.component";

export function InputFormField (props) {
    return (
        <div className="input-form-field">
            <label htmlFor={props.name} className="input-form-field__label">
                {props.label}
            </label>
            <div className="input-form-field__element">
                <InputElement id={props.id} name={props.name} />
            </div>
        </div>
    );
}