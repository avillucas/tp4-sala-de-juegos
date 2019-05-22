import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ayuda } from '../../enums/ayudas.enum';

@Component({
  selector: 'app-ayuda',
  templateUrl: './ayuda.component.html',
  styleUrls: ['./ayuda.component.css']
})
export class AyudaComponent implements OnInit {

  @Input() mensaje: string;
  @Output() AlPresionarReiniciar = new EventEmitter();

  tipo: Ayuda;
  mostrar: boolean;
  esperando: boolean;
  botonReiniciar: boolean;

  constructor() {
    this.reset();
  }

  private reset() {
    this.mensaje = '';
    this.tipo = Ayuda.Info;
    this.mostrar = false;
    this.esperando = false;
    this.botonReiniciar = false;
  }



  MostrarAyuda(mensaje: string) {
    this.mensaje = mensaje;
    this.mostrar = true;
    this.tipo = Ayuda.Warning;
    this.esperando = false;
  }

  MostrarError(mensaje: string) {
    this.mensaje = mensaje;
    this.mostrar = true;
    this.tipo = Ayuda.Danger;
    this.esperando = false;
  }

  MostrarGanador(mensaje: string) {
    this.mensaje = mensaje;
    this.mostrar = true;
    this.tipo = Ayuda.Success;
    this.esperando = false;
    this.botonReiniciar = false;
  }

  MostrarGanadorConReiniciar(mensaje: string) {
    this.MostrarGanador(mensaje);
    this.botonReiniciar = true;
  }

  MostrarPerdedor(mensaje: string) {
    this.mensaje = mensaje;
    this.mostrar = true;
    this.tipo = Ayuda.Danger;
    this.esperando = false;
    this.botonReiniciar = false;
  }

  MostrarPerdedorConReiniciar(mensaje: string) {
    this.MostrarPerdedor(mensaje);
    this.botonReiniciar = true;
  }

  MostrarEsperando() {
    this.mensaje = 'Esperando que ingrese tu respuesta';
    this.mostrar = true;
    this.esperando = true;
    this.tipo = Ayuda.Info;
  }

  OcultarEsperando() {
    this.mostrar = false;
    this.esperando = false;    
  }

  MostrarMaquinaJugando() {
    this.mensaje = 'Maquina Jugando';
    this.mostrar = true;
    this.esperando = true;
    this.tipo = Ayuda.Info;
  }

  MostrarMensajeRegistro() {
    this.mensaje = 'El usuario se creo correctamente. Ingrese los mismos datos desde la pantalla de inicio.';
    this.mostrar = true;
    this.esperando = true;
    this.tipo = Ayuda.Success;
  }

  OcultarPorFinalizacion() {
    this.reset();
  }

  ReiniciarClick() {
    this.AlPresionarReiniciar.emit();
  }

  ngOnInit() {
  }

}
