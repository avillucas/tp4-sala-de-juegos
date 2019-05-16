
import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { ResultadosService } from '../../servicios/resultados.service';

@Component({
  selector: 'app-listado-de-resultados',
  templateUrl: './listado-de-resultados.component.html',
  styleUrls: ['./listado-de-resultados.component.css']
})
export class ListadoDeResultadosComponent implements OnInit {
  @Input()
  listado: Array<any>;

  constructor(private dao: ResultadosService) {
  }

  ngOnInit() {
    //this.listado = this.dao.listar();
  }

  ver() {
    console.info(this.listado);
  }

}
