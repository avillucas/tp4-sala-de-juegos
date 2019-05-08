import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'operador'
})
export class OperadorPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
