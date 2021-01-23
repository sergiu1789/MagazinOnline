import { FormControl, ValidationErrors } from "@angular/forms";

export class ValidatorsForCheckOut {

    static notOnlyWhiteSpace(control: FormControl): ValidationErrors {
        if ((control.value != null) && (control.value.trim().lenght === 0)) {
            return { 'notOnlyWhiteSpace': true }
        }
        else {
            return null;

        }

    }
}
