import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { JuegoAgilidad } from '../../clases/juego-agilidad';

import { Subscription } from 'rxjs';
import { TimerObservable } from 'rxjs/observable/TimerObservable';
import { JuegosComponent } from '../juegos/juegos.component';
import { ResultadosService } from '../../servicios/resultados.service';

@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.css']
})

export class AgilidadAritmeticaComponent extends JuegosComponent implements OnInit {

  nuevoJuego: JuegoAgilidad;
  ocultarVerificar: boolean;
  Tiempo: number;
  tiempoIncial: number = 10;
  repetidor: any;
  numeroIngresado: number;
  private subscription: Subscription;

  ngOnInit() {
    this.nuevoJuego.iniciar();
  }

  constructor(resultadosDao: ResultadosService) {
    super(resultadosDao);
    this.nuevoJuego = new JuegoAgilidad();
    this.reiniciar();
  }

  NuevoJuego() {
    this.ocultarVerificar = false;
    this.repetidor = setInterval(() => {
      this.Tiempo--;
      if (this.Tiempo === 0) {
        clearInterval(this.repetidor);
        this.verificar();
        this.ocultarVerificar = true;
        this.Tiempo = this.tiempoIncial;
      }
    }, 900);

  }

  verificar() {
    this.ocultarVerificar = false;
    this.nuevoJuego.RespuestaIngresada = this.numeroIngresado;
    if (this.nuevoJuego.verificar()) {
      this.ayuda.MostrarGanador('Lo resolviste sos un Genio!');
    } else {
      let respuestaStr = ' Era ' + this.nuevoJuego.Respuesta;
      // tslint:disable-next-line:max-line-length
      respuestaStr += (this.nuevoJuego.RespuestaIngresada) ? ' pero no llegaste a completar la respuesta. ' : ' y pusiste ' + this.nuevoJuego.RespuestaIngresada + ' !!'
      this.ayuda.MostrarPerdedor(respuestaStr);
    }
    this.guardarResultado(this.nuevoJuego);
    this.reiniciar();
  }

  private reiniciar() {
    this.nuevoJuego.reiniciar();
    this.ocultarVerificar = true;
    this.Tiempo = this.tiempoIncial;
    clearInterval(this.repetidor);
  }


}
