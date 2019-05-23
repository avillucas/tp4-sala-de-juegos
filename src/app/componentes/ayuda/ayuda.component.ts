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
  @Output() AlPresionarLogin = new EventEmitter();
  

  tipo: Ayuda;
  mostrar: boolean;
  esperando: boolean;
  botonReiniciar: boolean;
  botonLogin: boolean;

  constructor() {
    this.reset();
  }

  private reset() {
    this.mensaje = '';
    this.tipo = Ayuda.Info;
    this.mostrar = false;
    this.esperando = false;
    this.botonReiniciar = false;
    this.botonLogin = false;
  }



  MostrarAyuda(mensaje: string) {
    this.reset();
    this.mensaje = mensaje;
    this.mostrar = true;
    this.tipo = Ayuda.Warning;    
  }

  MostrarError(mensaje: string) {
    this.reset();    
    this.mensaje = mensaje;
    this.mostrar = true;
    this.tipo = Ayuda.Danger;    
  }

  MostrarGanador(mensaje: string) {
    this.reset();    
    this.mensaje = mensaje;
    this.mostrar = true;
    this.tipo = Ayuda.Success;    
  }

  MostrarGanadorConReiniciar(mensaje: string) {
    this.MostrarGanador(mensaje);
    this.botonReiniciar = true;
  }

  MostrarPerdedor(mensaje: string) {
    this.reset();        
    this.mensaje = mensaje;
    this.mostrar = true;
    this.tipo = Ayuda.Danger;    
  }

  MostrarPerdedorConReiniciar(mensaje: string) {
    this.MostrarPerdedor(mensaje);
    this.botonReiniciar = true;
  }

  MostrarEsperando() {
    this.reset();            
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
    this.reset();            
    this.mensaje = 'Maquina Jugando';
    this.mostrar = true;
    this.esperando = true;
    this.tipo = Ayuda.Info;
  }

  MostrarMensajeRegistro() {
    this.reset();            
    this.mensaje = 'El usuario se creo correctamente. Ingrese los mismos datos desde la pantalla de inicio.';
    this.mostrar = true;    
    this.botonLogin = true;
    this.tipo = Ayuda.Success;
  }

  OcultarPorFinalizacion() {
    this.reset();
  }

  ReiniciarClick() {
    this.AlPresionarReiniciar.emit();
  }
  
  LoginClick() {
    this.AlPresionarLogin.emit();
  }

  ngOnInit() {
  }

}
