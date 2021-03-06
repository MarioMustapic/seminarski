import "./JoinForm.styles.scss";

import { Button } from "../Button/Button.component";
import { InputFormField } from "../InputFormField/InputFormField.component";

export function JoinForm (props) {
    return (
        <form className="join-form" autoComplete="off">
            <div className="join-form__field">
                <InputFormField
                    label="Display name"
                    name="displayName"
                    id="display-name"
                    onChange={props.onChange}
                    value={props.value}
                />
            </div>
            <div className="join-form__field">
                <Button variant="text">Join</Button>
            </div>
        </form>
    );
}