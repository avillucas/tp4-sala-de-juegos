
import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { JuegoAdivina } from '../../clases/juego-adivina';
import { PopupComponent } from '../popup/popup.component';
import { AyudaComponent } from '../ayuda/ayuda.component';

@Component({
  selector: 'app-adivina-el-numero',
  templateUrl: './adivina-el-numero.component.html',
  styleUrls: ['./adivina-el-numero.component.css']
})

export class AdivinaElNumeroComponent implements OnInit {
  @Output() enviarJuego: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild(PopupComponent) popup: PopupComponent;
  @ViewChild(AyudaComponent) ayuda: AyudaComponent;

  nuevoJuego: JuegoAdivina;
  Mensaje: string;
  contador: number;
  ocultarVerificar: boolean;

  constructor() {
    this.nuevoJuego = new JuegoAdivina();
    //console.info('numero Secreto:', this.nuevoJuego.numeroSecreto);
    this.ocultarVerificar = false;
  }

  generarnumero() {
    this.nuevoJuego.generarnumero();
    this.contador = 0;
    this.ayuda.MostrarEsperando();
  }

  private manejadorMensajeOportunidades(): string {
    let mensaje: string;
    switch (this.contador) {
      case 1:
        mensaje = 'No, intento fallido, animo';
        break;
      case 2:
        mensaje = 'No,Te estaras Acercando???';
        break;
      case 3:
        mensaje = 'No es, Yo crei que la tercera era la vencida.';
        break;
      case 4:
        mensaje = 'No era el  ' + this.nuevoJuego.numeroIngresado;
        break;
      case 5:
        mensaje = ' intentos y nada.';
        break;
      case 6:
        mensaje = 'Afortunado en el amor';
        break;
      default:
        mensaje = 'Ya le erraste ' + this.contador + ' veces';
        break;
    }
    mensaje = '#' + this.contador + ' ' + mensaje + ' ayuda :' + this.nuevoJuego.retornarAyuda();
    return mensaje;
  }

  verificar() {
    this.contador++;
    this.ocultarVerificar = true;
    /// console.info('numero Secreto:', this.nuevoJuego.gano);
    if (this.nuevoJuego.verificar()) {
      this.enviarJuego.emit(this.nuevoJuego);
      this.ayuda.OcultarPorFinalizacion();
      this.popup.MostrarGanador('Sos un Genio!!!');
      this.nuevoJuego.numeroSecreto = 0;
    } else {
      this.ayuda.MostrarAyuda(this.manejadorMensajeOportunidades());
    }
    // console.info('numero Secreto:', this.nuevoJuego.gano);
  }
  /*

 MostarMensajeCierre(mensaje: string = 'este es el mensaje', ganador: boolean = false) {
   this.Mensaje = mensaje;
   if (ganador) {
     this.popup.MostrarGanador();
   } else {
     this.popup.Mostrar();
   }
   let x = document.getElementById('snackbar');
   if (ganador) {
     x.className = 'show Ganador';
   } else {
     x.className = 'show Perdedor';
   }
   let modelo = this;
   setTimeout(function () {
     x.className = x.className.replace('show', '');
     modelo.ocultarVerificar = false;
   }, 3000);
   console.info('objeto', x);
 }
 */

  ngOnInit() {
    this.generarnumero();
  }

}
