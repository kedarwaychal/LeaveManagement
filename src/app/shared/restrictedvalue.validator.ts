import { AbstractControl, ValidatorFn } from "@angular/forms";

export function restname(): ValidatorFn{
        return (control:AbstractControl):{ [key: string]:any} | null=>{
            if(control.value.trim() == 'sam'){
                return { 'nameerror': true}
            }
            return null;
        }
}

