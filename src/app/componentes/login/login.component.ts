import { UsuariosService } from './../../servicios/usuarios.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { TimerObservable } from 'rxjs/observable/TimerObservable';
import { PopupComponent } from '../popup/popup.component';
import { AyudaComponent } from '../ayuda/ayuda.component';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private subscription: Subscription;

  @ViewChild(AyudaComponent) ayuda: AyudaComponent;

  progreso: number;
  progresoMensaje = 'esperando...';
  logeando = true;
  ProgresoDeAncho: string;

  clase = 'progress-bar progress-bar-info progress-bar-striped ';

  email = new FormControl(this.email, [
    Validators.required,
    Validators.minLength(4),
    Validators.maxLength(255),
    Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
  ]);

  password = new FormControl( this.password, [
    Validators.required,
    Validators.minLength(4),
    Validators.maxLength(255)
  ]);

  loginForm: FormGroup = this.builder.group({
    email: this.email,
    password: this.password,
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private builder: FormBuilder,
    private dao: UsuariosService,
    private auth: AuthService
  ) {

  }

  ngOnInit() {
    this.email.setValue('admin@sala.com');
    this.password.setValue('admin');
  }

  Entrar() {
    const email = this.EmailInput.value;
    const password = this.PasswordInput.value;
    //
    this.auth.login(email, password).then(data => {      
      if (data.token) {
        this.auth.saveToken(data.token);
        this.router.navigate(['/']);
      }
    }).catch(e => {
      this.ayuda.MostrarError('Error en las credenciales, por favor intente con otro usuario como admin@sala.com y admin ');
    });
  }

  get EmailInput(){
    return this.loginForm.get('email');
  }

  get PasswordInput(){
    return this.loginForm.get('password');
  }

}
