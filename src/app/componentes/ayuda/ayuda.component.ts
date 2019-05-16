import { Component, OnInit, Input } from '@angular/core';
import { Ayuda } from '../../enums/ayudas.enum';

@Component({
  selector: 'app-ayuda',
  templateUrl: './ayuda.component.html',
  styleUrls: ['./ayuda.component.css']
})
export class AyudaComponent implements OnInit {

  @Input() mensaje: string;
  tipo: Ayuda;
  mostrar: boolean;
  esperando: boolean;

  constructor() {
    this.reset();
  }

  private reset() {
    this.mensaje = '';
    this.tipo = Ayuda.Info;
    this.mostrar = false;
    this.esperando = false;
  }

  MostrarAyuda(mensaje: string) {
    this.mensaje = mensaje;
    this.mostrar = true;
    // TODO poner un timer y ocultarlo
    this.tipo = Ayuda.Warning;
    this.esperando = false;
    console.info(mensaje);
  }


  MostrarEsperando() {
    this.mensaje = 'Esperando que ingrese tu respuesta';
    this.mostrar = true;
    this.esperando = true;
    this.tipo = Ayuda.Info;
  }

  OcultarPorFinalizacion() {
    this.reset();
  }

  ngOnInit() {
  }

}
