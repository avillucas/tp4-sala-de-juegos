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

  nombre = new FormControl('', [
    Validators.required,
    Validators.minLength(1),
    Validators.maxLength(255)
  ]);

  email = new FormControl('', [
    Validators.required,
    Validators.minLength(1),
    Validators.maxLength(255),
    Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
  ]);

  password = new FormControl('', [
    Validators.required,
    Validators.minLength(1),
    Validators.maxLength(255)
  ]);

  registroForm: FormGroup = this.builder.group({
    nombre: this.nombre,
    email: this.email,
    password: this.password,
  });

  ngOnInit() {
  }

  Registrar() {
    // TODO mostrar los mensajes en ayuda
    console.info(this.registroForm.errors);

    const nombre = this.registroForm.get('nombre').value;
    const email = this.registroForm.get('email').value;
    const password = this.registroForm.get('password').value;
    //
    this.dao.crear(nombre, email, password).then(data => {
      this.popup.MostrarMensajeRegistro();
    });
  }

  AlCerrarPopUpRegistro() {
    this.router.navigate(['/Login']);
  }

}
