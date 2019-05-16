import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { ResultadosService } from '../../servicios/resultados.service';
import { Juego } from '../../clases/juego';
import { AyudaComponent } from '../ayuda/ayuda.component';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnInit {

  @ViewChild(AyudaComponent) protected ayuda: AyudaComponent;
  @Output() protected enviarJuego: EventEmitter<any> = new EventEmitter<any>();

  constructor(private resultadosDao: ResultadosService) { }

  guardarResultado(juego: Juego) {
    this.resultadosDao.cargar(juego);
  }

  ngOnInit() {
  }

  protected ReiniciarJuego(){
    console.log('reiniciar generico');
  }

}
