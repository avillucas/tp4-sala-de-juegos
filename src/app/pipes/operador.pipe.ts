import { Pipe, PipeTransform } from '@angular/core';
import { Operador } from '../enums/operadores.enum';
@Pipe({
  name: 'operador'
})
export class OperadorPipe implements PipeTransform {

  transform(value: Operador, args?: any): any {
    let signo :string; 
    switch(value){
      case Operador.Suma: signo = '+';break;
      case Operador.Resta: signo = '-';break;
      case Operador.Division: signo = '/';break;
      case Operador.Multiplicacion: signo =  '*';break;
    }
    return signo;
  }

}
