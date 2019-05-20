import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../servicios/usuarios.service';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logueado: boolean;
  nombreUsuario: string;

  constructor(private auth: AuthService) {
    this.logueado = this.auth.isLogued();
    this.nombreUsuario = this.auth.getNombre();
  }

  get NombreCompleto(): string {
    return this.nombreUsuario;
  }

  ngOnInit() {
  }

}
