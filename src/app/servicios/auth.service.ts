import { Injectable } from '@angular/core';
import { AuthHttp, AuthConfig, tokenNotExpired, JwtHelper } from 'angular2-jwt';
import { Router } from '@angular/router';
import { MyhttpService } from './myhttp.service';
import { apiConfig, fakeToken, fakeTokenData } from '../../environments/environment';

@Injectable()
export class AuthService {

  public name: string;
  private _token: string;
  jwtHelper: JwtHelper = new JwtHelper();

  constructor(private router: Router, private miHttp: MyhttpService) {
    this._token = localStorage.getItem('token');
  }

  login(email: string, password: string) {
    const payload = { 'email': email, 'clave': password };
    return this.miHttp.httpPostP(apiConfig.host + 'login/', payload);
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  public isLogued() {
    try {
      return tokenNotExpired() || false;
    } catch (error) {
      return false;
    }
  }


  public getTokenRaw() {
    return this._token;
  }

  public getToken() {
    try {
      // console.log('getToken', this.jwtHelper.decodeToken(this._token));
      return this.jwtHelper.decodeToken(this._token);
    } catch (error) {
      return undefined;
    }
  }

  public getExpirationDate() {

    try {
      //console.log('getExpirationDate', this.jwtHelper.getTokenExpirationDate(this._token));
      return this.jwtHelper.getTokenExpirationDate(this._token);
    } catch (error) {
      return null;
    }
  }

  public logOut() {
    try {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    } catch (error) {
      return false;
    }
  }

  private getPayloadData() {
    if (typeof this.jwtHelper.decodeToken(this._token).data === 'undefined') {
      return this.jwtHelper.decodeToken(this._token).nivel;
    }
    return {};
  }

  public getNombre() {
    const data = this.getPayloadData();
    return data.nombre;
  }

  public getEmail() {
    const data = this.getPayloadData();
    return data.email;
  }

  public getId() {
    const data = this.getPayloadData();
    return data.id;
  }

}
