import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'titlecase'
})

export class Titlecase implements PipeTransform{

    transform(value: string, ...args: any[]) {
        let inputone = value
        return inputone.toLowerCase().split(' ').map(val=>{
            val.charAt(0).toUpperCase().slice(1)}).join(' ')
    }

}