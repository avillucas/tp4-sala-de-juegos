import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UsuariosService } from '../../servicios/usuarios.service';
import { PopupComponent } from '../popup/popup.component';
import { AyudaComponent } from '../ayuda/ayuda.component';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  @ViewChild(PopupComponent) popup: PopupComponent;
  @ViewChild(AyudaComponent) ayuda: AyudaComponent;


  constructor(private builder: FormBuilder, private router: Router, private dao: UsuariosService) { }

  nombre = new FormControl( this.nombre, [
    Validators.required,
    Validators.minLength(4),
    Validators.maxLength(255)
  ]);

  email = new FormControl(this.email, [
    Validators.required,
    Validators.minLength(4),
    Validators.maxLength(255),
    Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
  ]);

  password = new FormControl(this.password, [
    Validators.required,
    Validators.minLength(4),
    Validators.maxLength(255)
  ]);

  registroForm: FormGroup = this.builder.group({
    nombre: this.nombre,
    email: this.email,
    password: this.password,
  });

  ngOnInit() {
    this.nombre.setValue('tester');
    this.email.setValue('tester@tester.com');
    this.password.setValue('tester');
  }

  get NombreInput(){
    return this.registroForm.get('nombre');
  }

  get EmailInput(){
    return this.registroForm.get('email');
  }

  get PasswordInput(){
    return this.registroForm.get('password');
  }

  Registrar() {
    const nombre = this.NombreInput.value;
    const email = this.EmailInput.value;
    const password = this.PasswordInput.value;
    //
    this.dao.crear(nombre, email, password).then(data => {
      this.ayuda.MostrarMensajeRegistro();
    }).catch(
      data=>{
        this.ayuda.MostrarError('Ocurrio un error al intentar registrar');
      }
    );
  }

  LlevarALogin() {
    this.router.navigate(['/Login']);
  }  

}
