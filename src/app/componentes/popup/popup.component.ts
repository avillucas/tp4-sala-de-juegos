import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  @Input() mensaje: string;
  @Output() AlCerrar = new EventEmitter();
  @Output() AlCerrarMensajeFinal = new EventEmitter();

  private mostrar: boolean;
  private mensajeFinal: boolean;
  private mensajeGanador: boolean;

  constructor() {
    this.reset();
  }

  private reset() {
    this.mensaje = '';
    this.mostrar = false;
    this.mensajeFinal = false;
    this.mensajeGanador = false;
  }

  Mostrar() {
    this.mostrar = true;
    //TODO MEJORAR
    let x = document.getElementById('modalMensajes');
    x.className = ' show ';
    if (this.mensajeFinal) {
      x.className = (this.mensajeGanador) ? ' ganador ' : ' perdedor ';
    }

  }

  MostrarFinal() {
    this.mensajeFinal = true;
    this.Mostrar();
  }

  MostrarGanador(mensaje: string) {
    this.mensaje = mensaje;
    this.mensajeGanador = true;
    this.MostrarFinal();
  }

  MostrarPerdedor(mensaje: string) {
    this.mensaje = mensaje;
    this.mensajeGanador = false;
    this.MostrarFinal();
  }


  ClickCerrar() {
    this.mostrar = false;
    this.AlCerrar.emit();
    if (this.mensajeFinal) {
      this.AlCerrarMensajeFinal.emit();
    }
    this.reset();
  }

  ngOnInit() {
  }

}
