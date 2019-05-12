import { Pipe, PipeTransform } from '@angular/core';
import { Ayuda } from '../enums/ayudas.enum';

@Pipe({
  name: 'alertClass'
})
export class AlertClassPipe implements PipeTransform {

  transform(value: Ayuda): string {
    return ' alert-' + Ayuda[value].toString().toLowerCase() + ' ';
  }

}
