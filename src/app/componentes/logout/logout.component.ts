import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../servicios/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private dao: UsuariosService, private router: Router) { }

  ngOnInit() {
  }

  Salir() {
    this.dao.logout();
    this.router.navigate(['/Principal']);
  }

}
