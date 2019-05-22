
import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { JuegoAdivina } from '../../clases/juego-adivina';
import { PopupComponent } from '../popup/popup.component';
import { AyudaComponent } from '../ayuda/ayuda.component';
import { JuegosComponent } from '../juegos/juegos.component';
import { ResultadosService } from '../../servicios/resultados.service';

@Component({
  selector: 'app-adivina-el-numero',
  templateUrl: './adivina-el-numero.component.html',
  styleUrls: ['./adivina-el-numero.component.css']
})

export class AdivinaElNumeroComponent extends JuegosComponent implements OnInit {

  Mensaje: string;
  contador: number;
  ocultarVerificar: boolean;
  nuevoJuego: JuegoAdivina;
  totalOportunidades: number;

  constructor(resultadosDao: ResultadosService) {
    super(resultadosDao);
    this.nuevoJuego = new JuegoAdivina();
    this.ocultarVerificar = false;
    this.totalOportunidades = 6;
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
    if (this.nuevoJuego.verificar()) {      
      this.enviarJuego.emit(this.nuevoJuego);
      this.ayuda.MostrarGanador('Adivinate en '+this.contador+' intento sos un Genio!');            
      this.guardarResultado(this.nuevoJuego);      
    } else {
      if(this.contador < this.totalOportunidades){
        this.ayuda.MostrarAyuda(this.manejadorMensajeOportunidades());
      }else{
        this.ayuda.MostrarPerdedor('Perdiste! Pasaron las '+this.totalOportunidades+' oportunidades.');
        this.guardarResultado(this.nuevoJuego);
      }
    }
  }

  private reinciar() {
    this.nuevoJuego.reiniciar();
    this.ocultarVerificar = false;    
  }

  ReiniciarJuego() {
    this.reinciar();
  }
  
  ngOnInit() {
    this.generarnumero();
  }

}
