import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../servicios/usuarios.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logueado: boolean;
  datosUsuario: any;

  constructor(private dao: UsuariosService) {
    this.logueado = this.dao.IsLoggedIn();
    this.datosUsuario = this.dao.getPayload();
  }

  get NombreCompleto(): string {
    return this.datosUsuario.name;
  }

  ngOnInit() {
  }

}
