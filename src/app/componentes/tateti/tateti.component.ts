import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { JuegoTateti } from '../../clases/juego-tateti';
import { Casillero } from '../../enums/casilleros.enum';

@Component({
  selector: 'app-tateti',
  templateUrl: './tateti.component.html',
  styleUrls: ['./tateti.component.css']
})
export class TatetiComponent implements OnInit {

  @Output() enviarJuego: EventEmitter<any> = new EventEmitter<any>();
  nuevoJuego: JuegoTateti;
  Mensaje: string;

  constructor() {
    console.info('Ta Te Ti iniciando');
    this.nuevoJuego = new JuegoTateti();
    this.ShowMensaje('Elegí un casillero:');
  }

  EstaTomado(indice: number) {
    return this.nuevoJuego.EstaTomado(indice);
  }

  Tomar(nroCasillero: number) {
    //juega el jugador
    const casilleroTomadoJugador = this.nuevoJuego.JugadorTomarCasillero(nroCasillero);
    console.info('Jugador:', casilleroTomadoJugador);
    // delay
    this.Verificar();
    // juega la maquina
    if (this.nuevoJuego.QuedanMovidas()) {
      const casilleroTomadoMaquina = this.nuevoJuego.MaquinaJugar();
      console.info('Maquina:', casilleroTomadoMaquina);
    }
    this.Verificar();
  }

  Verificar() {
    this.ShowMensaje('Verificando....');
    if (this.nuevoJuego.verificar()) {
      this.enviarJuego.emit(this.nuevoJuego);
      this.ShowMensaje('Gano');
    } else {
      this.ShowMensaje('Perdiste la maquina tiene una linea ');
    }
  }

  public Reiniciar() {
    this.nuevoJuego.reiniciar();

  }

  private ShowMensaje(mensaje: string) {
    this.Mensaje = mensaje;
  }

  ngOnInit() {
    this.nuevoJuego.iniciar();

  }
}
