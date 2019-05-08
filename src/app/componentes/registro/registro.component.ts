import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
//para poder hacer las validaciones
//import { Validators, FormBuilder, FormControl, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  email: string
  password: string;
  passwordConfirmacion: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  Registrar() {
    // TODO llamar al servicio loguear etc
    //TODO validar el formulario etc
    this.router.navigate(['/Principal']);

  }

}
