import { Component, OnInit } from '@angular/core';
import { JugadoresService } from '../../servicios/jugadores.service';

@Component({
  selector: 'app-jugadores-listado',
  templateUrl: './jugadores-listado.component.html',
  styleUrls: ['./jugadores-listado.component.css']
})
export class JugadoresListadoComponent implements OnInit {

  listado: any;
  miJugadoresServicio: JugadoresService;

  constructor(serviceJugadores: JugadoresService) {
    this.miJugadoresServicio = serviceJugadores;
  }

  ngOnInit() {
  }

  TraerTodos() {
    this.miJugadoresServicio.traertodos('jugadores/', 'todos').then(data => {
      this.listado = data;
    });
  }

  TraerGanadores() {
    this.miJugadoresServicio.traertodos('jugadores/', 'ganadores').then(data => {
      this.listado = data;
    });
  }

  TraerPerdedores() {
    this.miJugadoresServicio.traertodos('jugadores/', 'perdedores').then(data => {
      this.listado = data;
    });
  }

}
