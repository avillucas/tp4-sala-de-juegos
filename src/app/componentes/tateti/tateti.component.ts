import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { JuegoTateti } from '../../clases/juego-tateti';
import { Casillero } from '../../enums/casilleros.enum';
import { JuegosComponent } from '../juegos/juegos.component';
import { ResultadosService } from '../../servicios/resultados.service';

@Component({
  selector: 'app-tateti',
  templateUrl: './tateti.component.html',
  styleUrls: ['./tateti.component.css']
})
export class TatetiComponent extends JuegosComponent implements OnInit {

  @Output() enviarJuego: EventEmitter<any> = new EventEmitter<any>();
  nuevoJuego: JuegoTateti;
  Mensaje: string;

  constructor(resultadosDao: ResultadosService) {
    super(resultadosDao);
    //console.info('Ta Te Ti iniciando');
    this.nuevoJuego = new JuegoTateti();
    //this.ShowMensaje('Elegí un casillero:');
  }

  EstaTomado(indice: number) {
    return this.nuevoJuego.EstaTomado(indice);
  }

  Tomar(nroCasillero: number) {
    if (this.nuevoJuego.QuedanMovidas()) {
      //juega el jugador
      const casilleroTomadoJugador = this.nuevoJuego.JugadorTomarCasillero(nroCasillero);
      console.info('Jugador:', casilleroTomadoJugador);
      // delay
      this.Verificar();
      if (this.nuevoJuego.QuedanMovidas()) {
        const casilleroTomadoMaquina = this.nuevoJuego.MaquinaJugar();
        console.info('Maquina:', casilleroTomadoMaquina);
        this.Verificar();
      }
    }
  }

  Verificar() {
    if (this.nuevoJuego.verificar()) {
      this.enviarJuego.emit(this.nuevoJuego);
      this.ayuda.MostrarGanador('Venciste a la maquina');
    } else {
      this.ayuda.MostrarPerdedor('La Maquina te gano');
    }
    if (!this.nuevoJuego.QuedanMovidas()) {
      this.guardarResultado(this.nuevoJuego);
    }
  }

  public Reiniciar() {
    this.nuevoJuego.reiniciar();
  }


  ngOnInit() {
    this.nuevoJuego.iniciar();
  }
}
