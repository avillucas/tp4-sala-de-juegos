import { Component, OnInit } from '@angular/core';
import { JuegoPiedraPapelTijera } from '../../clases/juego-piedra-papel-tijera';
import { JuegosComponent } from '../juegos/juegos.component';
import { ResultadosService } from '../../servicios/resultados.service';
import { Opcion } from '../../enums/opciones.enum';

@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.css']
})
export class PiedraPapelTijeraComponent extends JuegosComponent implements OnInit {

  nuevoJuego: JuegoPiedraPapelTijera;
  permitidoJugar: boolean;
  opcionUsuario: Opcion;
  opcionMaquina: Opcion;
  Mensaje: string;

  constructor(resultadosDao: ResultadosService) {
    super(resultadosDao);
    this.nuevoJuego = new JuegoPiedraPapelTijera();    
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
    this.ayuda.MostrarMaquinaJugando()
    this.Delay(2000).then(()=>{
      this.ayuda.OcultarEsperando()
      this.verificar();
    });
  }

  private verificar(){
    //
    const resultado = this.nuevoJuego.Resultado;
    if (this.nuevoJuego.verificar()) {      
      this.ayuda.MostrarGanador('Elegiste '+resultado + ' sos un Genio!');
    } else if (this.nuevoJuego.esEmpate) {
      this.ayuda.MostrarGanador('Elegiste '+resultado + ' es empate!');
    } else {
      this.ayuda.MostrarPerdedor('Elegiste '+resultado + ' te gano la maquina! ');
    }
    this.guardarResultado(this.nuevoJuego);
    this.Reiniciar();
  }

  private ShowMensaje(mensaje: string) {
    this.Mensaje = mensaje;
  }

  ngOnInit() {
    this.nuevoJuego.iniciar();
  }

}
