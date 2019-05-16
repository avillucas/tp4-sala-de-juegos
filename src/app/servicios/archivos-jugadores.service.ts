import { Injectable } from '@angular/core';
import { apiConfig } from '../../environments/environment';
import { MyhttpService } from './myhttp.service';

@Injectable()
export class ArchivosJugadoresService {

  api: string;
  peticion: any;

  constructor(public miHttp: MyhttpService) {
    this.api = apiConfig.host + 'jugadoresarchivo/apirestjugadores/';
  }

  public traerJugadores(ruta) {
    return this.miHttp.httpGetO(this.api + ruta)
      .toPromise()
      .then(data => {
        console.log('Archivo jugadores');
        // console.log( data );
        return data;
      }, err => {
        console.log(err);
      });
  }

}
