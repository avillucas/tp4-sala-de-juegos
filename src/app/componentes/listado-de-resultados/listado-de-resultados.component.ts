
import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { ResultadosService } from '../../servicios/resultados.service';

@Component({
  selector: 'app-listado-de-resultados',
  templateUrl: './listado-de-resultados.component.html',
  styleUrls: ['./listado-de-resultados.component.css']
})
export class ListadoDeResultadosComponent implements OnInit {
  @Input()
  resultados: any;

  constructor(private dao: ResultadosService) {
    this.dao.listar().then(data => { this.resultados = data; });
  }

  ngOnInit() {

  }
}
