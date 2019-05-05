import { Component, OnInit } from '@angular/core';
import { JuegoPiedraPapelTijera } from '../../clases/juego-piedra-papel-tijera';
import { Opcion } from '../../enums/opciones.enum';

@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.css']
})
export class PiedraPapelTijeraComponent implements OnInit {

  nuevoJuego: JuegoPiedraPapelTijera;
  permitidoJugar: boolean;
  opcionUsuario: Opcion;
  opcionMaquina: Opcion;
  Mensaje: string;

  constructor() {
    this.nuevoJuego = new JuegoPiedraPapelTijera();
    console.info('Piedra Papel O Tijera:');
    this.permitidoJugar = true;
  }

  JugarPiedra() {
    this.opcionUsuario = Opcion.Piedra;
    this.Jugar();
  }

  JugarPapel() {
    this.opcionUsuario = Opcion.Papel;
    this.Jugar();
  }

  JugarTijera() {
    this.opcionUsuario = Opcion.Tijera;
    this.Jugar();
  }

  private Reiniciar() {
    this.nuevoJuego.reiniciar();
    this.permitidoJugar = true;
  }

  private Delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  private Jugar() {
    this.permitidoJugar = false;
    this.nuevoJuego.OpcionDelUsuario = this.opcionUsuario;
    //espera suspenso
    this.ShowMensaje('...');
    this.Delay(20);
    const resultado = this.nuevoJuego.Resultado;
    if (this.nuevoJuego.verificar()) {
      this.ShowMensaje(resultado + ' Ganaste!!!');
    } else if (this.nuevoJuego.esEmpate) {
      this.ShowMensaje(resultado + ' Fue Empate Proba de nuevo!!');
    } else {
      this.ShowMensaje(resultado + 'Perdiste!!!');
    }
    this.Reiniciar();
  }

  private ShowMensaje(mensaje: string) {
    this.Mensaje = mensaje;
  }

  ngOnInit() {
    this.nuevoJuego.iniciar();
  }

}
