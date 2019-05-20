import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// importo del module principal
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AdivinaElNumeroComponent } from '../componentes/adivina-el-numero/adivina-el-numero.component';
import { ListadoDeResultadosComponent } from '../componentes/listado-de-resultados/listado-de-resultados.component';
import { LoginComponent } from '../componentes/login/login.component';
import { ErrorComponent } from '../componentes/error/error.component';
import { PrincipalComponent } from '../componentes/principal/principal.component';
import { AgilidadAritmeticaComponent } from '../componentes/agilidad-aritmetica/agilidad-aritmetica.component';
import { ListadoComponent } from '../componentes/listado/listado.component'
import { JuegosComponent } from '../componentes/juegos/juegos.component';
import { RegistroComponent } from '../componentes/registro/registro.component';
import { MenuCardComponent } from '../componentes/menu-card/menu-card.component';
import { QuienSoyComponent } from '../componentes/quien-soy/quien-soy.component'
import { ListadoDePaisesComponent } from '../componentes/listado-de-paises/listado-de-paises.component'
import { MapaDeGoogleComponent } from '../componentes/mapa-de-google/mapa-de-google.component'
import { JugadoresListadoComponent } from '../componentes/jugadores-listado/jugadores-listado.component';
import { AnagramaComponent } from '../componentes/anagrama/anagrama.component';
import { TatetiComponent } from '../componentes/tateti/tateti.component';
import { PiedraPapelTijeraComponent } from '../componentes/piedra-papel-tijera/piedra-papel-tijera.component';
import { AuthGuardGuard } from '../guards/auth-guard.guard';
import { ListadosMenuComponent } from '../componentes/listados-menu/listados-menu.component';


// declaro donde quiero que se dirija
const MiRuteo = [
  { path: '', component: PrincipalComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Jugadores', component: JugadoresListadoComponent, canActivate: [AuthGuardGuard] },
  // { path: 'Mapa', component: MapaDeGoogleComponent },
  { path: 'QuienSoy', component: QuienSoyComponent },
  { path: 'Registro', component: RegistroComponent },
  { path: 'Principal', component: PrincipalComponent },
  { path: 'Configuracion', component: PrincipalComponent, canActivate: [AuthGuardGuard] },
  {
    path: 'Listados',
    component: ListadoComponent,
    children: [
      { path: '', component: ListadosMenuComponent, canActivate: [AuthGuardGuard] },
      { path: 'Jugadores', component: JugadoresListadoComponent, canActivate: [AuthGuardGuard] },
      { path: 'Resultados', component: ListadoDeResultadosComponent, canActivate: [AuthGuardGuard] },
      { path: 'Paises', component: ListadoDePaisesComponent, canActivate: [AuthGuardGuard] },
    ]
  },
  //  { path: 'Paises', component: ListadoDePaisesComponent },
  {
    path: 'Juegos',
    component: JuegosComponent,
    children: [
      { path: '', component: MenuCardComponent, canActivate: [AuthGuardGuard] },
      { path: 'Adivina', component: AdivinaElNumeroComponent, canActivate: [AuthGuardGuard] },
      { path: 'Agilidad', component: AgilidadAritmeticaComponent, canActivate: [AuthGuardGuard] },
      { path: 'Anagrama', component: AnagramaComponent, canActivate: [AuthGuardGuard] },
      { path: 'Tateti', component: TatetiComponent, canActivate: [AuthGuardGuard] },
      { path: 'PiedraPapelTijera', component: PiedraPapelTijeraComponent, canActivate: [AuthGuardGuard] }
    ]
  },
  { path: '**', component: ErrorComponent },
  { path: 'error', component: ErrorComponent }];

@NgModule({
  imports: [
    RouterModule.forRoot(MiRuteo)
  ],
  exports: [
    RouterModule
  ]
})
export class RuteandoModule { }
