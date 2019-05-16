import { Injectable } from '@angular/core';
import { MyhttpService } from './myhttp.service';
import { apiConfig, fakeToken, fakeTokenData } from '../../environments/environment';
import * as moment from 'moment';

@Injectable()
export class UsuariosService {

  private apiUrl: string;

  constructor(private miHttp: MyhttpService) {
    this.apiUrl = apiConfig.host + 'usuarios/';
  }

  public listar(): Promise<Array<any>> {
    return this.miHttp
      .httpGetP(this.apiUrl)
      .then(data => {
        console.log(data);
        return data;
      })
      .catch(err => {
        console.log(err);
        return null;
      });
  }

  login(email: string, password: string) {
    const payload = { 'email': email, 'clave': password };
    if (this.validarFakeLogin(payload)) {
      this.setSession({ 'token': fakeToken, 'expiresIn': 51840000 });
      return true;
    }
    return false;
    /*
    this.miHttp.httpPostP(apiConfig.host + 'login/', payload)
      .then(data => this.setSession)
      .catch(err => {
        console.log(err);
        return err;
      });
      */
  }

  private validarFakeLogin(payload) {
    return (payload.email === 'admin@sala.com' && payload.clave === 'admin');
  }

  private setSession(authResult) {
    // TODO revisar
    console.info('resultado', authResult);
    const expiresAt = moment().add(authResult.expiresIn, 'second');
    localStorage.setItem('id_token', authResult.token);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  public getPayload() {
    // const token = localStorage.getItem('id_token');
    // TODO completar esto en base a la lectura del token
    return fakeTokenData;
  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
  }

  IsLoggedIn() {
    // return moment().isBefore(this.getExpiration());
    return (localStorage.getItem('id_token') !== null);
  }

  IsLoggedOut() {
    return !this.IsLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }

  public crear(nombre: string, email: string, password: string): Promise<Array<any>> {
    const payload = { 'nombre': nombre, 'email': email, 'password': password };
    return this.miHttp.httpPostP(this.apiUrl, payload)
      .then(data => {
        console.log(data);
        return data;
      })
      .catch(err => {
        console.log(err);
        return null;
      });
  }

}
