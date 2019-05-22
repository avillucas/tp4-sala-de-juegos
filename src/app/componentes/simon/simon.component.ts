import { Component, OnInit } from '@angular/core';
import { JuegosComponent } from '../juegos/juegos.component';
import { ResultadosService } from '../../servicios/resultados.service';
import { JuegoSimon } from '../../clases/juego-simon';
import { Colores } from '../../enums/colores.enum';

@Component({
  selector: 'app-simon',
  templateUrl: './simon.component.html',
  styleUrls: ['./simon.component.css']
})
export class SimonComponent extends JuegosComponent implements OnInit {

  nuevoJuego: JuegoSimon;
  repetidor: any;
  ocultarNuevoJuego: boolean;
  emitiendo: boolean;
  private siguienteLuz: string;

  constructor(resultadosDao: ResultadosService) {
    super(resultadosDao);
    this.nuevoJuego = new JuegoSimon();
    this.reiniciar();
  }

  MostrarSiguienteColor() {
    if (this.nuevoJuego.SecuenciaMostrada) {
      return;
    }
    const color = this.nuevoJuego.SiguienteColorAMostrar;
    switch (color) {
      case Colores.Amarillo: this.prenderAmarillo().then(() => { this.MostrarSiguienteColor(); }); break;
      case Colores.Azul: this.prenderAzul().then(() => { this.MostrarSiguienteColor(); }); break;
      case Colores.Verde: this.prenderVerde().then(() => { this.MostrarSiguienteColor(); }); break;
      case Colores.Rojo: this.prenderRojo().then(() => { this.MostrarSiguienteColor(); }); break;
    }
  }

  MostrarSecuencia() {
    this.emitiendo = true;
    this.MostrarSiguienteColor();
  }

  NuevoJuego() {
    this.ocultarNuevoJuego = true;
    this.MaquinaJugar();
  }

  MaquinaJugar() {
    // Primer valor de la secuencia
    this.nuevoJuego.Jugar();
    // Mostrar en pantalla
    this.MostrarSecuencia();
  }

  ngOnInit() {
    this.nuevoJuego.iniciar();
  }

  private reiniciar() {
    this.nuevoJuego.reiniciar();
    this.ocultarNuevoJuego = false;
    this.emitiendo = false;
    clearInterval(this.repetidor);
  }

  verificar() {
    this.nuevoJuego.verificar();
    if (this.nuevoJuego.JuegoTerminado) {
      if (this.nuevoJuego.gano) {
        this.ayuda.MostrarGanador('Lo resolviste sos un Genio!');
      } else {
        this.ayuda.MostrarPerdedor('Te equivocaste!!! ' + this.nuevoJuego.SecuenciaCorrecta);
      }
      this.guardarResultado(this.nuevoJuego);
    } else {
      if (this.nuevoJuego.LeTocaALaMaquina) {
        this.MaquinaJugar();
      }
    }
  }

  PresionaVerde() {
    if (!this.nuevoJuego.JuegoTerminado) {
      this.prenderVerde().then(() => { this.usuarioJuega(Colores.Verde); });
    }
  }

  PresionaAzul() {
    if (!this.nuevoJuego.JuegoTerminado) {
      this.prenderAzul().then(() => { this.usuarioJuega(Colores.Azul); });
    }
  }

  PresionaAmarillo() {
    if (!this.nuevoJuego.JuegoTerminado) {
      this.prenderAmarillo().then(() => { this.usuarioJuega(Colores.Amarillo); });
    }
  }

  PresionaRojo() {
    if (!this.nuevoJuego.JuegoTerminado) {
      this.prenderRojo().then(() => { this.usuarioJuega(Colores.Rojo); });
    }
  }

  private usuarioJuega(color: Colores) {
    this.nuevoJuego.ColorIngresado = color;
    this.verificar();
  }

  private prenderAmarillo() {
    this.siguienteLuz = 'colorAmarillo';
    return this.parpadear();
  }

  private prenderVerde() {
    this.siguienteLuz = 'colorVerde';
    return this.parpadear();
  }

  private prenderRojo() {
    this.siguienteLuz = 'colorRojo';
    return this.parpadear();
  }

  private prenderAzul() {
    this.siguienteLuz = 'colorAzul';
    return this.parpadear();
  }

  private parpadear() {
    const promise = new Promise((resolver) => {
      this.prenderLuz();
      setTimeout(() => {
        this.apagarLuz();
        setTimeout(() => {
          resolver();
        }, this.nuevoJuego.TiempoApagado);

      }, this.nuevoJuego.Demora);
    }
    );
    return promise;
  }

  private prenderLuz() {
    document.getElementById(this.siguienteLuz).style.opacity = '1';
  }

  private apagarLuz() {
    document.getElementById(this.siguienteLuz).style.opacity = '0.3';
  }


}
