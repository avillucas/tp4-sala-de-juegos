import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AdivinaElNumeroComponent } from './componentes/adivina-el-numero/adivina-el-numero.component';
import { ListadoDeResultadosComponent } from './componentes/listado-de-resultados/listado-de-resultados.component';
import { LoginComponent } from './componentes/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { MyhttpService } from './servicios/myhttp.service';
import { PaisesService } from './servicios/paises.service';
import { JugadoresService } from './servicios/jugadores.service';
import { ArchivosJugadoresService } from './servicios/archivos-jugadores.service';
import { ErrorComponent } from './componentes/error/error.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { AgilidadAritmeticaComponent } from './componentes/agilidad-aritmetica/agilidad-aritmetica.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { RuteandoModule } from './ruteando/ruteando.module';
import { ListadoComponent } from './componentes/listado/listado.component';
import { JugadoresListadoComponent } from './componentes/jugadores-listado/jugadores-listado.component';
import { JuegoServiceService } from './servicios/juego-service.service';
import { JuegosComponent } from './componentes/juegos/juegos.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { MenuCardComponent } from './componentes/menu-card/menu-card.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { AnagramaComponent } from './componentes/anagrama/anagrama.component';
import { ListadoDePaisesComponent } from './componentes/listado-de-paises/listado-de-paises.component';
import { MapaDeGoogleComponent } from './componentes/mapa-de-google/mapa-de-google.component'
//import { AgmCoreModule } from '@agm/core';
import { SexoPipe } from './pipes/sexo.pipe';
import { TatetiComponent } from './componentes/tateti/tateti.component';
import { PiedraPapelTijeraComponent } from './componentes/piedra-papel-tijera/piedra-papel-tijera.component';
import { TatetiCasilleroComponent } from './componentes/tateti-casillero/tateti-casillero.component';
import { OperadorPipe } from './pipes/operador.pipe';
import { SimonComponent } from './componentes/simon/simon.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './componentes/header/header.component';
import { SidebarComponent } from './componentes/sidebar/sidebar.component';
import { LogoutComponent } from './componentes/logout/logout.component';
import { PopupComponent } from './componentes/popup/popup.component';
import { AyudaComponent } from './componentes/ayuda/ayuda.component';
import { AlertClassPipe } from './pipes/alert-class.pipe';
import { UsuariosService } from './servicios/usuarios.service';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { ListadosMenuComponent } from './componentes/listados-menu/listados-menu.component';
import { ResultadosService } from './servicios/resultados.service';
import { AuthService } from './servicios/auth.service';




@NgModule({
  declarations: [
    AppComponent,
    AdivinaElNumeroComponent,
    ListadoDeResultadosComponent,
    ErrorComponent,
    PrincipalComponent,
    LoginComponent,
    AgilidadAritmeticaComponent,
    MenuComponent,
    ListadoComponent,
    JuegosComponent,
    RegistroComponent,
    MenuCardComponent,
    QuienSoyComponent,
    AnagramaComponent,
    ListadoDePaisesComponent,
    MapaDeGoogleComponent,
    JugadoresListadoComponent,
    SexoPipe,
    TatetiComponent,
    PiedraPapelTijeraComponent,
    TatetiCasilleroComponent,
    OperadorPipe,
    SimonComponent,
    HeaderComponent,
    SidebarComponent,
    LogoutComponent,
    PopupComponent,
    AyudaComponent,
    AlertClassPipe,
    ListadosMenuComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RuteandoModule,
    HttpClientModule,
    //  AgmCoreModule.forRoot({    apiKey: 'AIzaSyB6f8x4IjRlesQ3oETc6BXYQHVRTOlY3Ys'   })
  ],
  providers: [
    JuegoServiceService,
    AuthGuardGuard,
    MyhttpService,
    UsuariosService,
    ResultadosService,
    PaisesService,
    ArchivosJugadoresService,
    JugadoresService,
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
