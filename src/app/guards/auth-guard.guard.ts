import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../servicios/auth.service';

@Injectable()
export class AuthGuardGuard implements CanActivate {

  constructor(public auth: AuthService, public router: Router) { }

  canActivate(): boolean {
    if (this.auth.isLogued()) {
      return true;
    }
    this.router.navigate(['/Login']);
    return false;
  }
}
