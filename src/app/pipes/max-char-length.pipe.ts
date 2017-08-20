import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maxCharLength'
})
export class MaxCharLengthPipe implements PipeTransform {

  transform(value: string, maxLength: number): any {
    if(!value || !maxLength){
      return value;
    }
    if(value.length > maxLength){
      return value.substring(0, maxLength) + "...";
    }else{
      return value;
    }
    
  }

}
