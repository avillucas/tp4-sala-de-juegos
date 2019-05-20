import { Injectable } from '@angular/core';
import { MyhttpService } from './myhttp.service';
import { apiConfig, fakeToken, fakeTokenData } from '../../environments/environment';
import { Juego } from '../clases/juego';
import { AuthService } from './auth.service';

@Injectable()
export class ResultadosService {

  private apiUrl: string;

  constructor(private miHttp: MyhttpService, private auth : AuthService) {
    this.apiUrl = apiConfig.host + 'resultados/';
  }

  public listar(): Promise<Array<any>> {
    const token =  this.auth.getTokenRaw();
    return this.miHttp.httpGetAutorized(this.apiUrl, token);
  }

  public cargar(juego: Juego) {
    const data = { gano: juego.gano, juego: juego.nombre };
    return this.miHttp.httpPostP(this.apiUrl, data);
  }

}
