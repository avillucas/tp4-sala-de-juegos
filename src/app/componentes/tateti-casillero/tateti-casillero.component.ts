import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Casillero } from '../../enums/casilleros.enum';

@Component({
  selector: 'app-tateti-casillero',
  templateUrl: './tateti-casillero.component.html',
  styleUrls: ['./tateti-casillero.component.css']
})
export class TatetiCasilleroComponent implements OnInit {

  @Input('tomado') tomado: boolean;
  @Input('deMaquina') deMaquina: boolean;
  @Output() TomarCasillero = new EventEmitter();
 
  deUsuario: boolean;  

  constructor() {
    this.tomado = false;
    this.deUsuario = false;
    this.deMaquina = false;    
  }

  
  ngOnInit() {
  }

  onClick() {
    if (this.tomado) {
      return false;
    }
    this.tomado = true;
    this.deUsuario = true;
    this.TomarCasillero.emit();    
    this.deMaquina = false;
  }

}
