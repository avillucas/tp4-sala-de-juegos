import { Injectable } from '@angular/core';
import { MiHttpService } from './mi-http/mi-http.service';
import { apiConfig } from '../../environments/environment';

@Injectable()
export class ArchivosJugadoresService {

  api: string;
  peticion: any;
  constructor(public miHttp: MiHttpService) {
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
