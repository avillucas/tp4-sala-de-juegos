import { Component, OnInit } from '@angular/core';
import { JugadoresService } from '../../servicios/jugadores.service';
import { UsuariosService } from '../../servicios/usuarios.service';

@Component({
  selector: 'app-jugadores-listado',
  templateUrl: './jugadores-listado.component.html',
  styleUrls: ['./jugadores-listado.component.css']
})
export class JugadoresListadoComponent implements OnInit {

  jugadores: any;

  constructor(private dao: UsuariosService) {
    this.traerTodos();
  }

  ngOnInit() {
  }

  private traerTodos() {
    this.dao.listar().then(data => {
      this.jugadores = data;
    });
  }
}
