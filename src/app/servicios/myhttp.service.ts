import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()

export class MyhttpService {
  constructor(public http: HttpClient) { }

  private crearHeaders() {
    return new HttpHeaders({ 'Content-type': 'application/json' });
  }

  private crearTokenHeaders(token) {
    return new HttpHeaders({ 'Content-type': 'application/json', 'Authorization': 'Bearer ' + token });
  }

  public httpGetP(url: string) {
    const headers = this.crearHeaders();
    return this.http
      .get(url, { headers: headers })
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  public httpGetO(url: string): Observable<any> {
    const headers = this.crearHeaders();
    return this.http
      .get(url, { headers: headers })
      .pipe(catchError(this.handleError('Error al obtener los objetos')));
  }

  public httpGetAutorized(url: string, token: string) {
    const headers = this.crearTokenHeaders(token);
    return this.http
      .get(url, { headers: headers })
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  public httpPostP(url: string, objeto: any) {
    const headers = this.crearHeaders();
    return this.http
      .post(url, objeto, { headers: headers })
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  public httpPostAutorized(url: string, objeto: any, token: string) {
    const headers = this.crearTokenHeaders(token);
    return this.http
      .post(url, objeto, { headers: headers })
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    return res;
    //return res.json() || {};
  }

  private handleError(error: Response | any) {
    return error;
  }
}
