import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'plus'
})
export class PlusPipe implements PipeTransform {

  transform(value): string {
    if(value === true){
      return '+';
    }else{
      return '-';
    }
  }

}
