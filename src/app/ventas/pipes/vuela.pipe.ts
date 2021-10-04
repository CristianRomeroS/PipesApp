import  { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'vuela'
})
export class VuelaPipe implements PipeTransform  {

    transform(valor:boolean=true):string{
        // console.log(enMayusculas);
        // if(enMayusculas){
        //     return value.toUpperCase();
        // }else{
        //     return value.toLowerCase();
        // }
        return valor 
        ?'Vuela'
        :'No vuela'
}
}