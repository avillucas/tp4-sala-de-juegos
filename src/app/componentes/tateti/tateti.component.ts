import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { JuegoTateti } from '../../clases/juego-tateti';
import { Casillero } from '../../enums/casilleros.enum';
import { JuegosComponent } from '../juegos/juegos.component';
import { ResultadosService } from '../../servicios/resultados.service';
import { TatetiCasilleroComponent } from '../tateti-casillero/tateti-casillero.component';
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
    this.nuevoJuego = new JuegoTateti();
  }

  EstaTomado(indice: number) {
    return this.nuevoJuego.EstaTomado(indice);
  }

  EsDeMaquina(indice: number) {
    return this.nuevoJuego.EsDeMaquina(indice);
  }

  Tomar(nroCasillero: number) {    
    if (this.nuevoJuego.QuedanMovidas()) {
      // juega el jugador
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
    this.nuevoJuego.verificar()
    if (!this.nuevoJuego.QuedanMovidas()) {
      if (this.nuevoJuego.gano) {
        this.enviarJuego.emit(this.nuevoJuego);        
        this.ayuda.MostrarGanador('Ganaste sos un Genio!!!');
      } else {
        this.ayuda.MostrarPerdedor('La Maquina te gano!!');
      }
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
