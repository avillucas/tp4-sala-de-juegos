import { UsuariosService } from './../servicios/usuarios.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuardGuard implements CanActivate {

  constructor(public auth: UsuariosService, public router: Router) { }

  canActivate(): boolean {
    if (this.auth.IsLoggedOut()) {
      this.router.navigate(['/Login']);
      return false;
    }
    return true;
  }
}
