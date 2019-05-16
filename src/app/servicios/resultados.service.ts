import { Injectable } from '@angular/core';
import { MyhttpService } from './myhttp.service';
import { apiConfig, fakeToken, fakeTokenData } from '../../environments/environment';
import { Juego } from '../clases/juego';

@Injectable()
export class ResultadosService {

  private apiUrl: string;

  constructor(private miHttp: MyhttpService) {
    this.apiUrl = apiConfig.host + 'resultados/';
  }

  public listar(): Promise<Array<any>> {
    return this.miHttp.httpGetP(this.apiUrl);
  }

  public cargar(juego: Juego) {
    const data = { gano: juego.gano, juego: juego.nombre };
    return this.miHttp.httpPostP(this.apiUrl, data);
  }

}
