webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!--Donde se encuentre este tag, se instancian los componentes dependientes del ruteo-->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__componentes_adivina_el_numero_adivina_el_numero_component__ = __webpack_require__("../../../../../src/app/componentes/adivina-el-numero/adivina-el-numero.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__componentes_listado_de_resultados_listado_de_resultados_component__ = __webpack_require__("../../../../../src/app/componentes/listado-de-resultados/listado-de-resultados.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__componentes_login_login_component__ = __webpack_require__("../../../../../src/app/componentes/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__servicios_myhttp_service__ = __webpack_require__("../../../../../src/app/servicios/myhttp.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__servicios_paises_service__ = __webpack_require__("../../../../../src/app/servicios/paises.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__servicios_jugadores_service__ = __webpack_require__("../../../../../src/app/servicios/jugadores.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__servicios_archivos_jugadores_service__ = __webpack_require__("../../../../../src/app/servicios/archivos-jugadores.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__componentes_error_error_component__ = __webpack_require__("../../../../../src/app/componentes/error/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__componentes_principal_principal_component__ = __webpack_require__("../../../../../src/app/componentes/principal/principal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__componentes_agilidad_aritmetica_agilidad_aritmetica_component__ = __webpack_require__("../../../../../src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__componentes_menu_menu_component__ = __webpack_require__("../../../../../src/app/componentes/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ruteando_ruteando_module__ = __webpack_require__("../../../../../src/app/ruteando/ruteando.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__componentes_listado_listado_component__ = __webpack_require__("../../../../../src/app/componentes/listado/listado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__componentes_jugadores_listado_jugadores_listado_component__ = __webpack_require__("../../../../../src/app/componentes/jugadores-listado/jugadores-listado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__servicios_juego_service_service__ = __webpack_require__("../../../../../src/app/servicios/juego-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__componentes_juegos_juegos_component__ = __webpack_require__("../../../../../src/app/componentes/juegos/juegos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__componentes_registro_registro_component__ = __webpack_require__("../../../../../src/app/componentes/registro/registro.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__componentes_menu_card_menu_card_component__ = __webpack_require__("../../../../../src/app/componentes/menu-card/menu-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__componentes_quien_soy_quien_soy_component__ = __webpack_require__("../../../../../src/app/componentes/quien-soy/quien-soy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__componentes_anagrama_anagrama_component__ = __webpack_require__("../../../../../src/app/componentes/anagrama/anagrama.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__componentes_listado_de_paises_listado_de_paises_component__ = __webpack_require__("../../../../../src/app/componentes/listado-de-paises/listado-de-paises.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__componentes_mapa_de_google_mapa_de_google_component__ = __webpack_require__("../../../../../src/app/componentes/mapa-de-google/mapa-de-google.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pipes_sexo_pipe__ = __webpack_require__("../../../../../src/app/pipes/sexo.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__componentes_tateti_tateti_component__ = __webpack_require__("../../../../../src/app/componentes/tateti/tateti.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__componentes_piedra_papel_tijera_piedra_papel_tijera_component__ = __webpack_require__("../../../../../src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__componentes_tateti_casillero_tateti_casillero_component__ = __webpack_require__("../../../../../src/app/componentes/tateti-casillero/tateti-casillero.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pipes_operador_pipe__ = __webpack_require__("../../../../../src/app/pipes/operador.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__componentes_simon_simon_component__ = __webpack_require__("../../../../../src/app/componentes/simon/simon.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__componentes_header_header_component__ = __webpack_require__("../../../../../src/app/componentes/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__componentes_sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/componentes/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__componentes_logout_logout_component__ = __webpack_require__("../../../../../src/app/componentes/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__componentes_popup_popup_component__ = __webpack_require__("../../../../../src/app/componentes/popup/popup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__componentes_ayuda_ayuda_component__ = __webpack_require__("../../../../../src/app/componentes/ayuda/ayuda.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pipes_alert_class_pipe__ = __webpack_require__("../../../../../src/app/pipes/alert-class.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__servicios_usuarios_service__ = __webpack_require__("../../../../../src/app/servicios/usuarios.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__guards_auth_guard_guard__ = __webpack_require__("../../../../../src/app/guards/auth-guard.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__componentes_listados_menu_listados_menu_component__ = __webpack_require__("../../../../../src/app/componentes/listados-menu/listados-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__servicios_resultados_service__ = __webpack_require__("../../../../../src/app/servicios/resultados.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__servicios_auth_service__ = __webpack_require__("../../../../../src/app/servicios/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__componentes_configuracion_configuracion_component__ = __webpack_require__("../../../../../src/app/componentes/configuracion/configuracion.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























//import { AgmCoreModule } from '@agm/core';



















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__componentes_adivina_el_numero_adivina_el_numero_component__["a" /* AdivinaElNumeroComponent */],
            __WEBPACK_IMPORTED_MODULE_5__componentes_listado_de_resultados_listado_de_resultados_component__["a" /* ListadoDeResultadosComponent */],
            __WEBPACK_IMPORTED_MODULE_12__componentes_error_error_component__["a" /* ErrorComponent */],
            __WEBPACK_IMPORTED_MODULE_13__componentes_principal_principal_component__["a" /* PrincipalComponent */],
            __WEBPACK_IMPORTED_MODULE_6__componentes_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_14__componentes_agilidad_aritmetica_agilidad_aritmetica_component__["a" /* AgilidadAritmeticaComponent */],
            __WEBPACK_IMPORTED_MODULE_15__componentes_menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_17__componentes_listado_listado_component__["a" /* ListadoComponent */],
            __WEBPACK_IMPORTED_MODULE_20__componentes_juegos_juegos_component__["a" /* JuegosComponent */],
            __WEBPACK_IMPORTED_MODULE_21__componentes_registro_registro_component__["a" /* RegistroComponent */],
            __WEBPACK_IMPORTED_MODULE_22__componentes_menu_card_menu_card_component__["a" /* MenuCardComponent */],
            __WEBPACK_IMPORTED_MODULE_23__componentes_quien_soy_quien_soy_component__["a" /* QuienSoyComponent */],
            __WEBPACK_IMPORTED_MODULE_24__componentes_anagrama_anagrama_component__["a" /* AnagramaComponent */],
            __WEBPACK_IMPORTED_MODULE_25__componentes_listado_de_paises_listado_de_paises_component__["a" /* ListadoDePaisesComponent */],
            __WEBPACK_IMPORTED_MODULE_26__componentes_mapa_de_google_mapa_de_google_component__["a" /* MapaDeGoogleComponent */],
            __WEBPACK_IMPORTED_MODULE_18__componentes_jugadores_listado_jugadores_listado_component__["a" /* JugadoresListadoComponent */],
            __WEBPACK_IMPORTED_MODULE_27__pipes_sexo_pipe__["a" /* SexoPipe */],
            __WEBPACK_IMPORTED_MODULE_28__componentes_tateti_tateti_component__["a" /* TatetiComponent */],
            __WEBPACK_IMPORTED_MODULE_29__componentes_piedra_papel_tijera_piedra_papel_tijera_component__["a" /* PiedraPapelTijeraComponent */],
            __WEBPACK_IMPORTED_MODULE_30__componentes_tateti_casillero_tateti_casillero_component__["a" /* TatetiCasilleroComponent */],
            __WEBPACK_IMPORTED_MODULE_31__pipes_operador_pipe__["a" /* OperadorPipe */],
            __WEBPACK_IMPORTED_MODULE_32__componentes_simon_simon_component__["a" /* SimonComponent */],
            __WEBPACK_IMPORTED_MODULE_34__componentes_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_35__componentes_sidebar_sidebar_component__["a" /* SidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_36__componentes_logout_logout_component__["a" /* LogoutComponent */],
            __WEBPACK_IMPORTED_MODULE_37__componentes_popup_popup_component__["a" /* PopupComponent */],
            __WEBPACK_IMPORTED_MODULE_38__componentes_ayuda_ayuda_component__["a" /* AyudaComponent */],
            __WEBPACK_IMPORTED_MODULE_39__pipes_alert_class_pipe__["a" /* AlertClassPipe */],
            __WEBPACK_IMPORTED_MODULE_42__componentes_listados_menu_listados_menu_component__["a" /* ListadosMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_45__componentes_configuracion_configuracion_component__["a" /* ConfiguracionComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_33__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_16__ruteando_ruteando_module__["a" /* RuteandoModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_19__servicios_juego_service_service__["a" /* JuegoServiceService */],
            __WEBPACK_IMPORTED_MODULE_41__guards_auth_guard_guard__["a" /* AuthGuardGuard */],
            __WEBPACK_IMPORTED_MODULE_8__servicios_myhttp_service__["a" /* MyhttpService */],
            __WEBPACK_IMPORTED_MODULE_40__servicios_usuarios_service__["a" /* UsuariosService */],
            __WEBPACK_IMPORTED_MODULE_43__servicios_resultados_service__["a" /* ResultadosService */],
            __WEBPACK_IMPORTED_MODULE_9__servicios_paises_service__["a" /* PaisesService */],
            __WEBPACK_IMPORTED_MODULE_11__servicios_archivos_jugadores_service__["a" /* ArchivosJugadoresService */],
            __WEBPACK_IMPORTED_MODULE_10__servicios_jugadores_service__["a" /* JugadoresService */],
            __WEBPACK_IMPORTED_MODULE_44__servicios_auth_service__["a" /* AuthService */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/clases/juego-adivina.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuegoAdivina; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clases_juego__ = __webpack_require__("../../../../../src/app/clases/juego.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var JuegoAdivina = (function (_super) {
    __extends(JuegoAdivina, _super);
    function JuegoAdivina(nombre, gano, jugador) {
        var _this = _super.call(this, 'Adivina el número', gano, jugador) || this;
        _this.numeroSecreto = 0;
        _this.numeroIngresado = 0;
        return _this;
    }
    JuegoAdivina.prototype.verificar = function () {
        if (this.numeroIngresado == this.numeroSecreto) {
            this.gano = true;
        }
        return (this.gano);
    };
    JuegoAdivina.prototype.generarnumero = function () {
        this.numeroSecreto = Math.floor((Math.random() * 100) + 1);
        console.info('numero Secreto:' + this.numeroSecreto);
        this.gano = false;
    };
    JuegoAdivina.prototype.retornarAyuda = function () {
        if (this.numeroIngresado < this.numeroSecreto) {
            return 'Falta';
        }
        return 'Te pasate';
    };
    JuegoAdivina.prototype.reiniciar = function () {
        this.generarnumero();
        this.numeroIngresado = 0;
    };
    return JuegoAdivina;
}(__WEBPACK_IMPORTED_MODULE_0__clases_juego__["a" /* Juego */]));

//# sourceMappingURL=juego-adivina.js.map

/***/ }),

/***/ "../../../../../src/app/clases/juego-agilidad.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuegoAgilidad; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__juego__ = __webpack_require__("../../../../../src/app/clases/juego.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enums_operadores_enum__ = __webpack_require__("../../../../../src/app/enums/operadores.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var JuegoAgilidad = (function (_super) {
    __extends(JuegoAgilidad, _super);
    function JuegoAgilidad(nombre, gano, jugador) {
        return _super.call(this, 'Agilidad Aritmetica', gano, jugador) || this;
    }
    Object.defineProperty(JuegoAgilidad.prototype, "CargarRespuestaIngresada", {
        set: function (respuestaIngresada) {
            this.respuestaIngresada = Number(respuestaIngresada);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JuegoAgilidad.prototype, "PrimerNumero", {
        set: function (primerNumero) {
            this.primerNumero = primerNumero;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JuegoAgilidad.prototype, "SegundoNumero", {
        set: function (segundoNumero) {
            this.segundoNumero = segundoNumero;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JuegoAgilidad.prototype, "Respuesta", {
        get: function () {
            return this.respuesta;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JuegoAgilidad.prototype, "RespuestaIngresada", {
        get: function () {
            return this.respuestaIngresada;
        },
        enumerable: true,
        configurable: true
    });
    JuegoAgilidad.prototype.calcularRespuesta = function () {
        var respuesta = 0;
        switch (this.operador) {
            case __WEBPACK_IMPORTED_MODULE_1__enums_operadores_enum__["a" /* Operador */].Suma:
                respuesta = this.primerNumero + this.segundoNumero;
                break;
            case __WEBPACK_IMPORTED_MODULE_1__enums_operadores_enum__["a" /* Operador */].Resta:
                respuesta = this.primerNumero - this.segundoNumero;
                break;
            case __WEBPACK_IMPORTED_MODULE_1__enums_operadores_enum__["a" /* Operador */].Division:
                respuesta = this.primerNumero / this.segundoNumero;
                break;
            case __WEBPACK_IMPORTED_MODULE_1__enums_operadores_enum__["a" /* Operador */].Multiplicacion:
                respuesta = this.primerNumero * this.segundoNumero;
                break;
        }
        this.respuesta = Math.floor(respuesta);
    };
    JuegoAgilidad.prototype.randomLength = function (length) {
        return Math.floor(Math.random() * length);
    };
    JuegoAgilidad.prototype.traerOperadorAlAzar = function () {
        var ind = this.randomLength(3);
        switch (ind - 1) {
            case 1:
                this.operador = __WEBPACK_IMPORTED_MODULE_1__enums_operadores_enum__["a" /* Operador */].Resta;
                break;
            case 2:
                this.operador = __WEBPACK_IMPORTED_MODULE_1__enums_operadores_enum__["a" /* Operador */].Division;
                break;
            case 3:
                this.operador = __WEBPACK_IMPORTED_MODULE_1__enums_operadores_enum__["a" /* Operador */].Multiplicacion;
                break;
            default:
                this.operador = __WEBPACK_IMPORTED_MODULE_1__enums_operadores_enum__["a" /* Operador */].Suma;
                break;
        }
    };
    JuegoAgilidad.prototype.randomInt = function (min, max) {
        return Math.floor(Math.random() * (max - (min + 1)) + (min + 1));
    };
    JuegoAgilidad.prototype.traerNumeroAlAzar = function () {
        return this.randomInt(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* agilidadConfig */].min, __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* agilidadConfig */].max);
    };
    JuegoAgilidad.prototype.Jugar = function () {
        this.generarOperacion();
    };
    JuegoAgilidad.prototype.generarOperacion = function () {
        this.primerNumero = this.traerNumeroAlAzar();
        this.segundoNumero = this.traerNumeroAlAzar();
        this.traerOperadorAlAzar();
        this.calcularRespuesta();
        console.log('p:', this.primerNumero, 'op', this.operador, 's:', this.segundoNumero, 'r:', this.respuesta);
    };
    JuegoAgilidad.prototype.iniciar = function () {
        this.resetear();
    };
    JuegoAgilidad.prototype.reiniciar = function () {
        this.resetear();
    };
    JuegoAgilidad.prototype.finalizar = function () {
        this.resetear();
    };
    JuegoAgilidad.prototype.resetear = function () {
        this.primerNumero = null;
        this.segundoNumero = null;
        this.operador = __WEBPACK_IMPORTED_MODULE_1__enums_operadores_enum__["a" /* Operador */].Suma;
        this.gano = null;
    };
    JuegoAgilidad.prototype.verificar = function () {
        this.gano = (this.respuestaIngresada == this.respuesta);
        return (this.gano);
    };
    return JuegoAgilidad;
}(__WEBPACK_IMPORTED_MODULE_0__juego__["a" /* Juego */]));

//# sourceMappingURL=juego-agilidad.js.map

/***/ }),

/***/ "../../../../../src/app/clases/juego-anagrama.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuegoAnagrama; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__juego__ = __webpack_require__("../../../../../src/app/clases/juego.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var JuegoAnagrama = (function (_super) {
    __extends(JuegoAnagrama, _super);
    function JuegoAnagrama(nombre, gano, jugador) {
        var _this = _super.call(this, 'Anagrama', gano, jugador) || this;
        // @todo Analizar como traer el diccionario desde algun enumerado
        // @todo evitar que salga dos veces la misma palabra
        _this.palabras = ['casa', 'cocina', 'topo', 'armando', 'tijeras', 'herramienta', 'pachanga'];
        return _this;
    }
    Object.defineProperty(JuegoAnagrama.prototype, "PalabraDesordenada", {
        get: function () {
            return this.palabraDesordenada;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JuegoAnagrama.prototype, "PalabraOrdenada", {
        get: function () {
            return this.palabraOrdenada;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JuegoAnagrama.prototype, "PalabraIngresada", {
        set: function (palabraIngresada) {
            this.palabraIngresada = palabraIngresada;
        },
        enumerable: true,
        configurable: true
    });
    JuegoAnagrama.prototype.desordenarPalabra = function (palabraOrdenada) {
        var palabraDesordenada = palabraOrdenada.split('').sort(this.randomize).join('');
        // evitar el caso en el que se repitan
        if (palabraDesordenada === palabraOrdenada) {
            palabraDesordenada = this.desordenarPalabra(palabraDesordenada);
        }
        return palabraDesordenada;
    };
    JuegoAnagrama.prototype.randomize = function (a, b) {
        return Math.random() > .5 ? -1 : 1;
    };
    JuegoAnagrama.prototype.traerPalabraAlAzar = function () {
        var largo = this.palabras.length;
        var indice = Math.floor(Math.random() * largo);
        return this.palabras[indice];
    };
    JuegoAnagrama.prototype.generarPalabraDesordenada = function () {
        this.palabraOrdenada = this.traerPalabraAlAzar();
        console.info('Palabra ordenada:' + this.palabraOrdenada);
        this.palabraDesordenada = this.desordenarPalabra(this.palabraOrdenada);
        console.info('Palabra desordenada:' + this.palabraDesordenada);
        this.gano = false;
    };
    JuegoAnagrama.prototype.iniciar = function () {
        this.resetear();
        this.generarPalabraDesordenada();
    };
    JuegoAnagrama.prototype.reiniciar = function () {
        this.resetear();
        this.generarPalabraDesordenada();
    };
    JuegoAnagrama.prototype.finalizar = function () {
        this.resetear();
    };
    JuegoAnagrama.prototype.resetear = function () {
        this.palabraDesordenada = '';
        this.palabraIngresada = '';
        this.palabraOrdenada = '';
    };
    JuegoAnagrama.prototype.verificar = function () {
        console.info('Verificacion:', this.palabraIngresada, this.palabraOrdenada);
        if (this.palabraIngresada === this.palabraOrdenada) {
            this.gano = true;
        }
        return (this.gano);
    };
    return JuegoAnagrama;
}(__WEBPACK_IMPORTED_MODULE_0__juego__["a" /* Juego */]));

//# sourceMappingURL=juego-anagrama.js.map

/***/ }),

/***/ "../../../../../src/app/clases/juego-piedra-papel-tijera.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuegoPiedraPapelTijera; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__juego__ = __webpack_require__("../../../../../src/app/clases/juego.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enums_opciones_enum__ = __webpack_require__("../../../../../src/app/enums/opciones.enum.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var JuegoPiedraPapelTijera = (function (_super) {
    __extends(JuegoPiedraPapelTijera, _super);
    function JuegoPiedraPapelTijera(nombre, gano, jugador) {
        var _this = _super.call(this, 'Piedra papel o tijera', gano, jugador) || this;
        _this.empate = false;
        return _this;
    }
    Object.defineProperty(JuegoPiedraPapelTijera.prototype, "OpcionDeLaMaquina", {
        get: function () {
            return this.opcionDeLaMaquina;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JuegoPiedraPapelTijera.prototype, "esEmpate", {
        get: function () {
            return this.empate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JuegoPiedraPapelTijera.prototype, "Resultado", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_1__enums_opciones_enum__["a" /* Opcion */][this.opcionDelUsuario] + ' VS ' + __WEBPACK_IMPORTED_MODULE_1__enums_opciones_enum__["a" /* Opcion */][this.opcionDeLaMaquina];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JuegoPiedraPapelTijera.prototype, "OpcionDelUsuario", {
        set: function (opcion) {
            this.opcionDelUsuario = opcion;
        },
        enumerable: true,
        configurable: true
    });
    JuegoPiedraPapelTijera.prototype.randomLength = function (length) {
        return Math.floor(Math.random() * length);
    };
    JuegoPiedraPapelTijera.prototype.definirOpcionMaquina = function () {
        var ind = this.randomLength(3);
        switch (ind) {
            case 0:
                this.opcionDeLaMaquina = __WEBPACK_IMPORTED_MODULE_1__enums_opciones_enum__["a" /* Opcion */].Piedra;
                break;
            case 1:
                this.opcionDeLaMaquina = __WEBPACK_IMPORTED_MODULE_1__enums_opciones_enum__["a" /* Opcion */].Papel;
                break;
            default:
                this.opcionDeLaMaquina = __WEBPACK_IMPORTED_MODULE_1__enums_opciones_enum__["a" /* Opcion */].Tijera;
                break;
        }
    };
    JuegoPiedraPapelTijera.prototype.verificar = function () {
        // de ser un empate indicarle que es un empate
        if (this.opcionDeLaMaquina === this.opcionDelUsuario) {
            this.gano = false;
            this.empate = true;
        }
        this.gano = (
        // piedra le gana a tijera
        (this.opcionDelUsuario === __WEBPACK_IMPORTED_MODULE_1__enums_opciones_enum__["a" /* Opcion */].Piedra && this.opcionDeLaMaquina === __WEBPACK_IMPORTED_MODULE_1__enums_opciones_enum__["a" /* Opcion */].Tijera)
            || (this.opcionDelUsuario === __WEBPACK_IMPORTED_MODULE_1__enums_opciones_enum__["a" /* Opcion */].Papel && this.opcionDeLaMaquina === __WEBPACK_IMPORTED_MODULE_1__enums_opciones_enum__["a" /* Opcion */].Piedra)
            || (this.opcionDelUsuario === __WEBPACK_IMPORTED_MODULE_1__enums_opciones_enum__["a" /* Opcion */].Tijera && this.opcionDeLaMaquina === __WEBPACK_IMPORTED_MODULE_1__enums_opciones_enum__["a" /* Opcion */].Papel));
        return this.gano;
    };
    JuegoPiedraPapelTijera.prototype.resetear = function () {
        this.empate = false;
        this.gano = false;
    };
    JuegoPiedraPapelTijera.prototype.iniciar = function () {
        this.resetear();
        this.definirOpcionMaquina();
    };
    JuegoPiedraPapelTijera.prototype.reiniciar = function () {
        this.resetear();
        this.definirOpcionMaquina();
    };
    JuegoPiedraPapelTijera.prototype.finalizar = function () {
        this.resetear();
    };
    return JuegoPiedraPapelTijera;
}(__WEBPACK_IMPORTED_MODULE_0__juego__["a" /* Juego */]));

//# sourceMappingURL=juego-piedra-papel-tijera.js.map

/***/ }),

/***/ "../../../../../src/app/clases/juego-simon.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuegoSimon; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__juego__ = __webpack_require__("../../../../../src/app/clases/juego.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enums_colores_enum__ = __webpack_require__("../../../../../src/app/enums/colores.enum.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var JuegoSimon = (function (_super) {
    __extends(JuegoSimon, _super);
    // sacar uno al azar de los 5 REPETICIONES veces en orden , guardar el orden y ver que se cumpla lo mismo
    function JuegoSimon(nombre, gano, jugador) {
        var _this = _super.call(this, 'Simon', gano, jugador) || this;
        // 5 colores
        _this.colores = [__WEBPACK_IMPORTED_MODULE_1__enums_colores_enum__["a" /* Colores */].Amarillo, __WEBPACK_IMPORTED_MODULE_1__enums_colores_enum__["a" /* Colores */].Azul, __WEBPACK_IMPORTED_MODULE_1__enums_colores_enum__["a" /* Colores */].Rojo, __WEBPACK_IMPORTED_MODULE_1__enums_colores_enum__["a" /* Colores */].Verde];
        _this.paso = 600;
        _this.tiempoApagado = 50;
        _this.cantidadSecuenciasParaGanar = 3;
        _this.resetear();
        return _this;
    }
    Object.defineProperty(JuegoSimon.prototype, "ColorIngresado", {
        set: function (color) {
            this.ultimoColorUsuario = color;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JuegoSimon.prototype, "SecuenciaCorrecta", {
        get: function () {
            return this.secuencia.reduce(function (valorAnterior, valorActual) {
                return valorAnterior + ', ' + __WEBPACK_IMPORTED_MODULE_1__enums_colores_enum__["a" /* Colores */][valorActual];
            }, '');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JuegoSimon.prototype, "CantidadSecuenciasParaGanar", {
        get: function () {
            return this.cantidadSecuenciasParaGanar;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JuegoSimon.prototype, "JuegoTerminado", {
        get: function () {
            return this.juegoTerminado;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JuegoSimon.prototype, "TiempoApagado", {
        get: function () {
            return this.tiempoApagado;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JuegoSimon.prototype, "LeTocaALaMaquina", {
        get: function () {
            return this.secuenciaRequeridaJugador.length === 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JuegoSimon.prototype, "Secuencia", {
        get: function () {
            return this.secuencia;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JuegoSimon.prototype, "SecuenciaMostrada", {
        get: function () {
            return this.secuenciaAMostrar.length === 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JuegoSimon.prototype, "SiguienteColorAMostrar", {
        get: function () {
            return this.secuenciaAMostrar.shift();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JuegoSimon.prototype, "Demora", {
        get: function () {
            return this.demora;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JuegoSimon.prototype, "SecuenciaJugador", {
        get: function () {
            return this.secuenciaRequeridaJugador;
        },
        enumerable: true,
        configurable: true
    });
    JuegoSimon.prototype.Jugar = function () {
        var color = this.traerColorAlAzar();
        this.secuencia.push(color);
        this.secuenciaRequeridaJugador = Object.assign(new Array(), this.secuencia);
        this.secuenciaAMostrar = Object.assign(new Array(), this.secuencia);
        return color;
    };
    JuegoSimon.prototype.traerColorAlAzar = function () {
        var largo = this.colores.length;
        var indice = Math.floor(Math.random() * largo);
        return this.colores[indice];
    };
    JuegoSimon.prototype.iniciar = function () {
        this.resetear();
        //
    };
    JuegoSimon.prototype.reiniciar = function () {
        this.resetear();
    };
    JuegoSimon.prototype.finalizar = function () {
        this.resetear();
    };
    JuegoSimon.prototype.resetear = function () {
        this.secuencia = new Array();
        this.secuenciaAMostrar = new Array();
        this.secuenciaRequeridaJugador = new Array();
        this.demora = this.paso;
        this.juegoTerminado = false;
        this.cantidadSecuenciasJugadas = 0;
    };
    JuegoSimon.prototype.aumentarVelocidad = function () {
        this.demora -= this.paso;
    };
    // TODO implementar para subir de nivel
    JuegoSimon.prototype.subirNivel = function () {
        this.aumentarVelocidad();
    };
    JuegoSimon.prototype.verificar = function () {
        // Si el color que esta ingresando el usuario es el que viene en la secuencia
        var colorValido = this.secuenciaRequeridaJugador.shift();
        if (colorValido !== this.ultimoColorUsuario) {
            this.gano = false;
            this.juegoTerminado = true;
        }
        if (this.LeTocaALaMaquina) {
            this.cantidadSecuenciasJugadas++;
        }
        // Si no quedan mas en la secuencia y la cantidad de secuencias es la correcta gano
        if (this.secuenciaRequeridaJugador.length < 1 && this.cantidadSecuenciasParaGanar === this.cantidadSecuenciasJugadas) {
            this.gano = true;
            this.juegoTerminado = true;
        }
        return (this.gano);
    };
    return JuegoSimon;
}(__WEBPACK_IMPORTED_MODULE_0__juego__["a" /* Juego */]));

//# sourceMappingURL=juego-simon.js.map

/***/ }),

/***/ "../../../../../src/app/clases/juego-tateti.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuegoTateti; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__juego__ = __webpack_require__("../../../../../src/app/clases/juego.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enums_casilleros_enum__ = __webpack_require__("../../../../../src/app/enums/casilleros.enum.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var JuegoTateti = (function (_super) {
    __extends(JuegoTateti, _super);
    function JuegoTateti(nombre, gano, jugador) {
        var _this = _super.call(this, 'Tateti', gano, jugador) || this;
        _this.iniciar();
        return _this;
    }
    JuegoTateti.prototype.EstaTomado = function (casillero) {
        return (this.disponibles.indexOf(casillero) === -1);
    };
    JuegoTateti.prototype.EsDeJugador = function (casillero) {
        return (this.casillerosJugador.indexOf(casillero) !== -1);
    };
    JuegoTateti.prototype.EsDeMaquina = function (casillero) {
        return (this.casillerosMaquina.indexOf(casillero) !== -1);
    };
    JuegoTateti.prototype.MaquinaJugar = function () {
        // un numero al azar para elegir entre los disponibles
        var casilleroSeleccionado = this.traerCasilleroDisponibleAlAzar();
        // Jugar ese casillero
        this.Jugar(casilleroSeleccionado);
        //guardar el casillero
        this.casillerosMaquina.push(casilleroSeleccionado);
        // retorna el casillero de la maquina
        return casilleroSeleccionado;
    };
    JuegoTateti.prototype.JugadorTomarCasilleroDisponiblePorIndice = function (indiceCasillerDisponible) {
        var casilleroSeleccionado = this.disponibles[indiceCasillerDisponible];
        this.JugadorTomarCasillero(casilleroSeleccionado);
        return casilleroSeleccionado;
    };
    JuegoTateti.prototype.JugadorTomarCasillero = function (casilleroSeleccionado) {
        // Jugar ese casillero
        this.Jugar(casilleroSeleccionado);
        // guardar el casillero
        this.casillerosJugador.push(casilleroSeleccionado);
        //
        return casilleroSeleccionado;
    };
    JuegoTateti.prototype.Jugar = function (casilleroSeleccionado) {
        this.tomarCasillero(casilleroSeleccionado);
    };
    JuegoTateti.prototype.traerCasilleroDisponibleAlAzar = function () {
        var largo = this.disponibles.length;
        var indice = Math.floor(Math.random() * largo);
        return this.disponibles[indice];
    };
    JuegoTateti.prototype.tomarCasillero = function (casilleroTomado) {
        if (this.disponibles.indexOf(casilleroTomado) === -1) {
            // todo averiguar como lanzar una excepcion correctamente
            console.error('Logro seleccionar un casillero (' + casilleroTomado.toString() + ') que habia sido tomado anteriormente');
            return false;
        }
        this.disponibles = this.disponibles.filter(function (casillero) { return casillero !== casilleroTomado; });
    };
    JuegoTateti.prototype.iniciar = function () {
        this.resetear();
        //
    };
    JuegoTateti.prototype.reiniciar = function () {
        this.resetear();
        //
    };
    JuegoTateti.prototype.finalizar = function () {
        this.resetear();
    };
    JuegoTateti.prototype.resetear = function () {
        this.disponibles = [__WEBPACK_IMPORTED_MODULE_1__enums_casilleros_enum__["a" /* Casillero */].A1, __WEBPACK_IMPORTED_MODULE_1__enums_casilleros_enum__["a" /* Casillero */].B1, __WEBPACK_IMPORTED_MODULE_1__enums_casilleros_enum__["a" /* Casillero */].C1, __WEBPACK_IMPORTED_MODULE_1__enums_casilleros_enum__["a" /* Casillero */].A2, __WEBPACK_IMPORTED_MODULE_1__enums_casilleros_enum__["a" /* Casillero */].B2,
            __WEBPACK_IMPORTED_MODULE_1__enums_casilleros_enum__["a" /* Casillero */].C2, __WEBPACK_IMPORTED_MODULE_1__enums_casilleros_enum__["a" /* Casillero */].A3, __WEBPACK_IMPORTED_MODULE_1__enums_casilleros_enum__["a" /* Casillero */].B3, __WEBPACK_IMPORTED_MODULE_1__enums_casilleros_enum__["a" /* Casillero */].C3];
        this.casillerosJugador = [];
        this.casillerosMaquina = [];
        this.terminado = false;
    };
    JuegoTateti.prototype.QuedanMovidas = function () {
        return (!this.terminado && this.disponibles.length > 0);
    };
    JuegoTateti.prototype.JuegoTerminado = function () {
        return !this.QuedanMovidas;
    };
    JuegoTateti.prototype.verificarSiTomoTresCasilleros = function (casillero1, casillero2, casillero3) {
        if (this.casillerosJugador.indexOf(casillero1) !== -1
            && this.casillerosJugador.indexOf(casillero2) !== -1
            && this.casillerosJugador.indexOf(casillero3) !== -1) {
            return true;
        }
        return false;
    };
    JuegoTateti.prototype.verificarSiTomoTresCasillerosMaquina = function (casillero1, casillero2, casillero3) {
        if (this.casillerosMaquina.indexOf(casillero1) !== -1
            && this.casillerosMaquina.indexOf(casillero2) !== -1
            && this.casillerosMaquina.indexOf(casillero3) !== -1) {
            return true;
        }
        return false;
    };
    JuegoTateti.prototype.verificar = function () {
        if (
        // Revisar si tiene la primera linea en horizontal
        (this.verificarSiTomoTresCasilleros(1, 2, 3))
            || (this.verificarSiTomoTresCasilleros(4, 5, 6))
            || (this.verificarSiTomoTresCasilleros(7, 8, 9))
            || (this.verificarSiTomoTresCasilleros(1, 4, 7))
            || (this.verificarSiTomoTresCasilleros(2, 5, 8))
            || (this.verificarSiTomoTresCasilleros(3, 6, 9))
            || (this.verificarSiTomoTresCasilleros(1, 5, 9))
            || (this.verificarSiTomoTresCasilleros(3, 5, 7))) {
            this.gano = true;
            this.terminado = true;
        }
        if (
        // Revisar si tiene la primera linea en horizontal
        (this.verificarSiTomoTresCasillerosMaquina(1, 2, 3))
            || (this.verificarSiTomoTresCasillerosMaquina(4, 5, 6))
            || (this.verificarSiTomoTresCasillerosMaquina(7, 8, 9))
            || (this.verificarSiTomoTresCasillerosMaquina(1, 4, 7))
            || (this.verificarSiTomoTresCasillerosMaquina(2, 5, 8))
            || (this.verificarSiTomoTresCasillerosMaquina(3, 6, 9))
            || (this.verificarSiTomoTresCasillerosMaquina(1, 5, 9))
            || (this.verificarSiTomoTresCasillerosMaquina(3, 5, 7))) {
            this.gano = false;
            this.terminado = true;
        }
        if (this.terminado) {
            this.bloquearTodos();
        }
        return (this.gano);
    };
    JuegoTateti.prototype.bloquearTodos = function () {
        this.disponibles = [];
    };
    return JuegoTateti;
}(__WEBPACK_IMPORTED_MODULE_0__juego__["a" /* Juego */]));

//# sourceMappingURL=juego-tateti.js.map

/***/ }),

/***/ "../../../../../src/app/clases/juego.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Juego; });
var Juego = (function () {
    function Juego(nombre, gano, jugador) {
        this.nombre = 'Sin Nombre';
        this.gano = false;
        if (nombre) {
            this.nombre = nombre;
        }
        if (gano) {
            this.gano = gano;
        }
        if (jugador) {
            this.jugador = jugador;
        }
        else {
            this.jugador = 'natalia natalia';
        }
    }
    Juego.prototype.retornarAyuda = function () {
        return 'No se definio una ayuda para este juego';
    };
    return Juego;
}());

//# sourceMappingURL=juego.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/adivina-el-numero/adivina-el-numero.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/adivina-el-numero/adivina-el-numero.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Page Heading -->\n<h1 class=\"h3 mb-4 text-gray-800\">{{ nuevoJuego.nombre }}</h1>\n<h2 class=\"h6 mb-4 text-gray-800\">\n  Elegimos un numero secreto entre 1 y 100 intenta adivinarlo !!! Tenes {{ totalOportunidades }} intentos. \n</h2>\n<app-ayuda (ReiniciarClick)=\"ReiniciarJuego()\"></app-ayuda>      \n<div class=\"row\">\n  <div class=\"col-lg-6\">\n    <!-- body-->\n    <form name=\"juego\" (submit)=\"verificar()\">\n        <label>Ingresa el numero que crees que elegimos</label>\n        <input\n          [(ngModel)]=\"nuevoJuego.numeroIngresado\"\n          name=\"numeroIngresado\"\n          type=\"number\"\n          class=\"form-control\"\n          style=\"width:50%\"\n        />\n        <br/>\n      <button\n       type=\"submit\"\n        *ngIf=\"nuevoJuego.numeroSecreto != 0\"       \n        class=\"btn btn-success btn-lg\"\n      >\n        ¿ Adivine ?\n      </button>     \n    </form>\n    <!-- /.content -->\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/componentes/adivina-el-numero/adivina-el-numero.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdivinaElNumeroComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__ = __webpack_require__("../../../../../src/app/clases/juego-adivina.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__juegos_juegos_component__ = __webpack_require__("../../../../../src/app/componentes/juegos/juegos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__servicios_resultados_service__ = __webpack_require__("../../../../../src/app/servicios/resultados.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdivinaElNumeroComponent = (function (_super) {
    __extends(AdivinaElNumeroComponent, _super);
    function AdivinaElNumeroComponent(resultadosDao) {
        var _this = _super.call(this, resultadosDao) || this;
        _this.nuevoJuego = new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]();
        _this.ocultarVerificar = false;
        _this.totalOportunidades = 6;
        return _this;
    }
    AdivinaElNumeroComponent.prototype.generarnumero = function () {
        this.nuevoJuego.generarnumero();
        this.contador = 0;
        this.ayuda.MostrarEsperando();
    };
    AdivinaElNumeroComponent.prototype.manejadorMensajeOportunidades = function () {
        var mensaje;
        switch (this.contador) {
            case 1:
                mensaje = 'No, intento fallido, animo';
                break;
            case 2:
                mensaje = 'No,Te estaras Acercando???';
                break;
            case 3:
                mensaje = 'No es, Yo crei que la tercera era la vencida.';
                break;
            case 4:
                mensaje = 'No era el  ' + this.nuevoJuego.numeroIngresado;
                break;
            case 5:
                mensaje = ' intentos y nada.';
                break;
            case 6:
                mensaje = 'Afortunado en el amor';
                break;
            default:
                mensaje = 'Ya le erraste ' + this.contador + ' veces';
                break;
        }
        mensaje = '#' + this.contador + ' ' + mensaje + ' ayuda :' + this.nuevoJuego.retornarAyuda();
        return mensaje;
    };
    AdivinaElNumeroComponent.prototype.verificar = function () {
        this.contador++;
        this.ocultarVerificar = true;
        if (this.nuevoJuego.verificar()) {
            this.enviarJuego.emit(this.nuevoJuego);
            this.ayuda.MostrarGanador('Adivinate en ' + this.contador + ' intento sos un Genio!');
            this.guardarResultado(this.nuevoJuego);
        }
        else {
            if (this.contador < this.totalOportunidades) {
                this.ayuda.MostrarAyuda(this.manejadorMensajeOportunidades());
            }
            else {
                this.ayuda.MostrarPerdedor('Perdiste! Pasaron las ' + this.totalOportunidades + ' oportunidades.');
                this.guardarResultado(this.nuevoJuego);
            }
        }
    };
    AdivinaElNumeroComponent.prototype.reinciar = function () {
        this.nuevoJuego.reiniciar();
        this.ocultarVerificar = false;
    };
    AdivinaElNumeroComponent.prototype.ReiniciarJuego = function () {
        this.reinciar();
    };
    AdivinaElNumeroComponent.prototype.ngOnInit = function () {
        this.generarnumero();
    };
    return AdivinaElNumeroComponent;
}(__WEBPACK_IMPORTED_MODULE_2__juegos_juegos_component__["a" /* JuegosComponent */]));
AdivinaElNumeroComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-adivina-el-numero',
        template: __webpack_require__("../../../../../src/app/componentes/adivina-el-numero/adivina-el-numero.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/adivina-el-numero/adivina-el-numero.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__servicios_resultados_service__["a" /* ResultadosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__servicios_resultados_service__["a" /* ResultadosService */]) === "function" && _a || Object])
], AdivinaElNumeroComponent);

var _a;
//# sourceMappingURL=adivina-el-numero.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".operador, .operando, .igual{font-size:5em;}\r\n.operador{\r\n\r\n}\r\n.operando{\r\n\r\n}\r\n.igual{\r\n\r\n}\r\ninput{ \r\n    width: 5em;    \r\n    position: relative;\r\n    font-size: 5em;\r\n    background-color: transparent;\r\n    border: thin solid;\r\n    margin: 0;\r\n    padding: 0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.html":
/***/ (function(module, exports) {

module.exports = "<form name=\"juego\" (submit)=\"verificar()\">\n  <strong>Vamos a mostrarte una cuenta aritmetica debes completar su resultado en {{ tiempoIncial }} segundos </strong>  \n  <app-ayuda ></app-ayuda>  \n  <br/>\n  <button type=\"button\" (click)=\"NuevoJuego()\" class=\"btn btn-success btn-lg\"  [hidden]=\"!ocultarVerificar\" >Empezar!!</button>\n  \n  <div class=\"row\"  [hidden]=\"ocultarVerificar\" >\n      <div class=\"col-lg-10 resultado\">\n        <span class=\"operando\">{{nuevoJuego.primerNumero}}</span>\n        <span class=\"operador\">{{nuevoJuego.operador | operador  }}</span>\n        <span class=\"operando\">{{nuevoJuego.segundoNumero}}</span>\n        <span class=\"igual\">=</span>\n        <input [(ngModel)]=\"numeroIngresado\" placeholder=\"Resultado\" name=\"numeroIngresado\" type=\"number\" />        \n      </div>    \n  </div>\n  <div class=\"row\"  [hidden]=\"ocultarVerificar \" >    \n    <div class=\"col-lg-10 resultado\">        \n        <button type=\"submit\" class=\"btn btn-success btn-lg\">Verificar {{Tiempo}} </button>        \n      </div>    \n  </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgilidadAritmeticaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clases_juego_agilidad__ = __webpack_require__("../../../../../src/app/clases/juego-agilidad.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__juegos_juegos_component__ = __webpack_require__("../../../../../src/app/componentes/juegos/juegos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__servicios_resultados_service__ = __webpack_require__("../../../../../src/app/servicios/resultados.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AgilidadAritmeticaComponent = (function (_super) {
    __extends(AgilidadAritmeticaComponent, _super);
    function AgilidadAritmeticaComponent(resultadosDao) {
        var _this = _super.call(this, resultadosDao) || this;
        _this.tiempoIncial = 15;
        _this.nuevoJuego = new __WEBPACK_IMPORTED_MODULE_1__clases_juego_agilidad__["a" /* JuegoAgilidad */]();
        _this.reiniciar();
        return _this;
    }
    AgilidadAritmeticaComponent.prototype.ngOnInit = function () {
        this.nuevoJuego.iniciar();
    };
    AgilidadAritmeticaComponent.prototype.NuevoJuego = function () {
        var _this = this;
        this.nuevoJuego.Jugar();
        this.ocultarVerificar = false;
        this.repetidor = setInterval(function () {
            _this.Tiempo--;
            if (_this.Tiempo === 0) {
                clearInterval(_this.repetidor);
                _this.verificar();
                _this.ocultarVerificar = true;
                _this.Tiempo = _this.tiempoIncial;
            }
        }, 900);
    };
    AgilidadAritmeticaComponent.prototype.verificar = function () {
        //en caso de que sea antes
        clearInterval(this.repetidor);
        this.ocultarVerificar = false;
        this.nuevoJuego.CargarRespuestaIngresada = this.numeroIngresado;
        this.nuevoJuego.verificar();
        if (this.nuevoJuego.gano) {
            this.ayuda.MostrarGanador('Lo resolviste sos un Genio!');
        }
        else {
            var respuestaStr = ' Era ' + this.nuevoJuego.Respuesta + ' pero no llegaste a completar la respuesta.';
            if (this.nuevoJuego.RespuestaIngresada) {
                respuestaStr = ' Era ' + this.nuevoJuego.Respuesta + ' y pusiste ' + this.nuevoJuego.RespuestaIngresada + ' !!';
            }
            this.ayuda.MostrarPerdedor(respuestaStr);
        }
        this.guardarResultado(this.nuevoJuego);
        this.reiniciar();
    };
    AgilidadAritmeticaComponent.prototype.reiniciar = function () {
        this.nuevoJuego.reiniciar();
        this.ocultarVerificar = true;
        this.Tiempo = this.tiempoIncial;
        this.numeroIngresado = '';
        clearInterval(this.repetidor);
    };
    return AgilidadAritmeticaComponent;
}(__WEBPACK_IMPORTED_MODULE_2__juegos_juegos_component__["a" /* JuegosComponent */]));
AgilidadAritmeticaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-agilidad-aritmetica',
        template: __webpack_require__("../../../../../src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__servicios_resultados_service__["a" /* ResultadosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__servicios_resultados_service__["a" /* ResultadosService */]) === "function" && _a || Object])
], AgilidadAritmeticaComponent);

var _a;
//# sourceMappingURL=agilidad-aritmetica.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/anagrama/anagrama.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/anagrama/anagrama.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <h1>{{ nuevoJuego.nombre }}!</h1>\n</div>\n\n<h3>Las letras desordenadas de la palabra son :</h3>\n<h1>{{ palabraDesordenada }}</h1>\n<form [formGroup]=\"anagramaForm\"  (ngSubmit)=\"Verificar()\" >\n  <input\n  placeholder=\"Ingresá la palabra ordenada\"\n  name=\"palabraOrdenada\"\n  type=\"text\"\n   class=\"form-control\"\n   [formControl]=\"palabraOrdenadaControl\"\n   />\n  <button type=\"submit\"  [disabled]=\"!anagramaForm.valid\">Verificar</button>\n  <button type=\"button\" (click)=\"Reiniciar()\">Intentar Otra Palabra</button>\n</form>\n<h1>{{ Mensaje }}</h1>\n"

/***/ }),

/***/ "../../../../../src/app/componentes/anagrama/anagrama.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnagramaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clases_juego_anagrama__ = __webpack_require__("../../../../../src/app/clases/juego-anagrama.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AnagramaComponent = (function () {
    function AnagramaComponent(builder) {
        this.builder = builder;
        this.enviarJuego = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.palabraOrdenadaControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].minLength(1),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].maxLength(30)
        ]);
        this.anagramaForm = this.builder.group({
            palabraOrdenada: this.palabraOrdenadaControl
        });
        console.info('Anagrama iniciando');
        this.nuevoJuego = new __WEBPACK_IMPORTED_MODULE_1__clases_juego_anagrama__["a" /* JuegoAnagrama */]();
    }
    AnagramaComponent.prototype.Verificar = function () {
        this.ShowMensaje('Verificando....');
        this.nuevoJuego.PalabraIngresada = this.anagramaForm.get('palabraOrdenada').value;
        if (this.nuevoJuego.verificar()) {
            this.enviarJuego.emit(this.nuevoJuego);
            // this.MostarMensaje('Sos un Genio!!!', true);
            this.ShowMensaje('Gano');
        }
        else {
            this.ShowMensaje('Estuviste Cerca la palabra era ' + this.nuevoJuego.PalabraOrdenada + ' !!! o Intenta con otra palabra. ');
        }
    };
    AnagramaComponent.prototype.Reiniciar = function () {
        this.nuevoJuego.reiniciar();
        this.palabraDesordenada = this.nuevoJuego.PalabraDesordenada;
    };
    AnagramaComponent.prototype.ShowMensaje = function (mensaje) {
        this.Mensaje = mensaje;
    };
    AnagramaComponent.prototype.ngOnInit = function () {
        this.nuevoJuego.iniciar();
        this.palabraDesordenada = this.nuevoJuego.PalabraDesordenada;
    };
    return AnagramaComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], AnagramaComponent.prototype, "enviarJuego", void 0);
AnagramaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-anagrama',
        template: __webpack_require__("../../../../../src/app/componentes/anagrama/anagrama.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/anagrama/anagrama.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object])
], AnagramaComponent);

var _a, _b;
//# sourceMappingURL=anagrama.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/ayuda/ayuda.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/ayuda/ayuda.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"alert {{tipo | alertClass}}\" role=\"alert\" [hidden]=\"!mostrar\" >\n  <i *ngIf=\"esperando\" class=\"fa fa-spinner fa-spin\"></i>\n  {{ mensaje }}\n  <button *ngIf=\"botonReiniciar\" (click)=\"ReiniciarClick()\" class=\"btn btn-success btn-lg\" >Reiniciar El Juego</button>\n  <button *ngIf=\"botonLogin\" (click)=\"LoginClick()\" class=\"btn btn-success btn-lg\" >Ir al Inicio</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/componentes/ayuda/ayuda.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AyudaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enums_ayudas_enum__ = __webpack_require__("../../../../../src/app/enums/ayudas.enum.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AyudaComponent = (function () {
    function AyudaComponent() {
        this.AlPresionarReiniciar = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.AlPresionarLogin = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.reset();
    }
    AyudaComponent.prototype.reset = function () {
        this.mensaje = '';
        this.tipo = __WEBPACK_IMPORTED_MODULE_1__enums_ayudas_enum__["a" /* Ayuda */].Info;
        this.mostrar = false;
        this.esperando = false;
        this.botonReiniciar = false;
        this.botonLogin = false;
    };
    AyudaComponent.prototype.MostrarAyuda = function (mensaje) {
        this.reset();
        this.mensaje = mensaje;
        this.mostrar = true;
        this.tipo = __WEBPACK_IMPORTED_MODULE_1__enums_ayudas_enum__["a" /* Ayuda */].Warning;
    };
    AyudaComponent.prototype.MostrarError = function (mensaje) {
        this.reset();
        this.mensaje = mensaje;
        this.mostrar = true;
        this.tipo = __WEBPACK_IMPORTED_MODULE_1__enums_ayudas_enum__["a" /* Ayuda */].Danger;
    };
    AyudaComponent.prototype.MostrarGanador = function (mensaje) {
        this.reset();
        this.mensaje = mensaje;
        this.mostrar = true;
        this.tipo = __WEBPACK_IMPORTED_MODULE_1__enums_ayudas_enum__["a" /* Ayuda */].Success;
    };
    AyudaComponent.prototype.MostrarGanadorConReiniciar = function (mensaje) {
        this.MostrarGanador(mensaje);
        this.botonReiniciar = true;
    };
    AyudaComponent.prototype.MostrarPerdedor = function (mensaje) {
        this.reset();
        this.mensaje = mensaje;
        this.mostrar = true;
        this.tipo = __WEBPACK_IMPORTED_MODULE_1__enums_ayudas_enum__["a" /* Ayuda */].Danger;
    };
    AyudaComponent.prototype.MostrarPerdedorConReiniciar = function (mensaje) {
        this.MostrarPerdedor(mensaje);
        this.botonReiniciar = true;
    };
    AyudaComponent.prototype.MostrarEsperando = function () {
        this.reset();
        this.mensaje = 'Esperando que ingrese tu respuesta';
        this.mostrar = true;
        this.esperando = true;
        this.tipo = __WEBPACK_IMPORTED_MODULE_1__enums_ayudas_enum__["a" /* Ayuda */].Info;
    };
    AyudaComponent.prototype.OcultarEsperando = function () {
        this.mostrar = false;
        this.esperando = false;
    };
    AyudaComponent.prototype.MostrarMaquinaJugando = function () {
        this.reset();
        this.mensaje = 'Maquina Jugando';
        this.mostrar = true;
        this.esperando = true;
        this.tipo = __WEBPACK_IMPORTED_MODULE_1__enums_ayudas_enum__["a" /* Ayuda */].Info;
    };
    AyudaComponent.prototype.MostrarMensajeRegistro = function () {
        this.reset();
        this.mensaje = 'El usuario se creo correctamente. Ingrese los mismos datos desde la pantalla de inicio.';
        this.mostrar = true;
        this.botonLogin = true;
        this.tipo = __WEBPACK_IMPORTED_MODULE_1__enums_ayudas_enum__["a" /* Ayuda */].Success;
    };
    AyudaComponent.prototype.OcultarPorFinalizacion = function () {
        this.reset();
    };
    AyudaComponent.prototype.ReiniciarClick = function () {
        this.AlPresionarReiniciar.emit();
    };
    AyudaComponent.prototype.LoginClick = function () {
        this.AlPresionarLogin.emit();
    };
    AyudaComponent.prototype.ngOnInit = function () {
    };
    return AyudaComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], AyudaComponent.prototype, "mensaje", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], AyudaComponent.prototype, "AlPresionarReiniciar", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], AyudaComponent.prototype, "AlPresionarLogin", void 0);
AyudaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-ayuda',
        template: __webpack_require__("../../../../../src/app/componentes/ayuda/ayuda.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/ayuda/ayuda.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AyudaComponent);

//# sourceMappingURL=ayuda.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/configuracion/configuracion.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/configuracion/configuracion.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/componentes/configuracion/configuracion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfiguracionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfiguracionComponent = (function () {
    function ConfiguracionComponent() {
    }
    ConfiguracionComponent.prototype.ngOnInit = function () {
    };
    return ConfiguracionComponent;
}());
ConfiguracionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-configuracion',
        template: __webpack_require__("../../../../../src/app/componentes/configuracion/configuracion.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/configuracion/configuracion.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ConfiguracionComponent);

//# sourceMappingURL=configuracion.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/error/error.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/error/error.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <!-- Outer Row -->\n  <div class=\"row justify-content-center\">\n    <div class=\"col-xl-10 col-lg-12 col-md-9\">\n      <div class=\"card o-hidden border-0 shadow-lg my-5\">\n        <div class=\"card-body p-0\">\n          <!-- Nested Row within Card Body -->\n          <div class=\"row\">\n            <div class=\"col-lg-6 d-none d-lg-block bg-login-image\"></div>\n            <div class=\"col-lg-6\">\n              <div class=\"p-5\">\n                <div class=\"text-center\">\n                  <h1 class=\"h4 text-gray-900 mb-4\">\n                    Oops! Ha ocurrido un error\n                  </h1>\n                  <p>La pagina que estas intentando buscar no existe.\n                    <br/>\n                    Podes intentar ir a</p>\n                  <ul>\n                    <li><a class=\"small\" routerLink=\"/Registro\">Registro</a></li>\n                    <li><a class=\"small\" routerLink=\"/Login\">Ingreso</a></li>\n                    <li><a class=\"small\" routerLink=\"/\">Pantalla Principal</a></li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/componentes/error/error.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErrorComponent = (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    return ErrorComponent;
}());
ErrorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-error',
        template: __webpack_require__("../../../../../src/app/componentes/error/error.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/error/error.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ErrorComponent);

//# sourceMappingURL=error.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/header/header.component.html":
/***/ (function(module, exports) {

module.exports = " <!-- Topbar -->\n <nav class=\"navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow\">\n\n    <!-- Sidebar Toggle (Topbar) -->\n    <button id=\"sidebarToggleTop\" class=\"btn btn-link d-md-none rounded-circle mr-3\">\n      <i class=\"fa fa-bars\"></i>\n    </button>\n\n    <!-- Topbar Search -->\n    <div class=\"d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 \">\n      <!--<h2></h2> -->\n    </div>\n\n    <!-- Topbar Navbar -->\n    <ul class=\"navbar-nav ml-auto\" [hidden]=\"!logueado\" >\n\n\n      <div class=\"topbar-divider d-none d-sm-block\"></div>\n\n      <!-- Nav Item - User Information -->\n      <li class=\"nav-item dropdown no-arrow\" >\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"userDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <span class=\"mr-2 d-none d-lg-inline text-gray-600 small\">{{ NombreCompleto }} </span>\n          <img class=\"img-profile rounded-circle\" src=\"./assets/imagenes/profile-photo.jpg\">\n        </a>\n        <!-- Dropdown - User Information -->\n        <div class=\"dropdown-menu dropdown-menu-right shadow animated--grow-in\" aria-labelledby=\"userDropdown\">\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\"  data-toggle=\"modal\" data-target=\"#logoutModal\">\n            <i class=\"fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400\"></i>\n            Salir\n          </a>\n        </div>\n      </li>\n\n    </ul>\n\n  </nav>\n  <!-- End of Topbar -->\n"

/***/ }),

/***/ "../../../../../src/app/componentes/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_auth_service__ = __webpack_require__("../../../../../src/app/servicios/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(auth) {
        this.auth = auth;
        this.logueado = this.auth.isLogued();
        this.nombreUsuario = this.auth.getEmail();
    }
    Object.defineProperty(HeaderComponent.prototype, "NombreCompleto", {
        get: function () {
            return this.nombreUsuario;
        },
        enumerable: true,
        configurable: true
    });
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/componentes/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servicios_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__servicios_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/juegos/juegos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/juegos/juegos.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Page Wrapper -->\n<div id=\"wrapper\">\n  <app-sidebar></app-sidebar>\n\n  <!-- Content Wrapper -->\n  <div id=\"content-wrapper\" class=\"d-flex flex-column\">\n    <!-- Main Content -->\n    <div id=\"content\">\n      <app-header></app-header>\n      <div class=\"container-fluid\">\n        <!-- container-fluid -->\n        <router-outlet></router-outlet>\n        <!-- /.container-fluid -->\n      </div>\n      <!-- End of Main Content -->\n    </div>\n    <!-- End of Page Wrapper -->\n    <app-logout></app-logout>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/componentes/juegos/juegos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuegosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_resultados_service__ = __webpack_require__("../../../../../src/app/servicios/resultados.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ayuda_ayuda_component__ = __webpack_require__("../../../../../src/app/componentes/ayuda/ayuda.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JuegosComponent = (function () {
    function JuegosComponent(resultadosDao) {
        this.resultadosDao = resultadosDao;
        this.enviarJuego = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    JuegosComponent.prototype.guardarResultado = function (juego) {
        this.resultadosDao.cargar(juego);
    };
    JuegosComponent.prototype.ngOnInit = function () {
    };
    JuegosComponent.prototype.ReiniciarJuego = function () {
        console.log('reiniciar generico');
    };
    return JuegosComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__ayuda_ayuda_component__["a" /* AyudaComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ayuda_ayuda_component__["a" /* AyudaComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ayuda_ayuda_component__["a" /* AyudaComponent */]) === "function" && _a || Object)
], JuegosComponent.prototype, "ayuda", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], JuegosComponent.prototype, "enviarJuego", void 0);
JuegosComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-juegos',
        template: __webpack_require__("../../../../../src/app/componentes/juegos/juegos.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/juegos/juegos.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__servicios_resultados_service__["a" /* ResultadosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__servicios_resultados_service__["a" /* ResultadosService */]) === "function" && _c || Object])
], JuegosComponent);

var _a, _b, _c;
//# sourceMappingURL=juegos.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/jugadores-listado/jugadores-listado.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/jugadores-listado/jugadores-listado.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-condensed\">\n  <thead>\n    <tr>\n      <th>Nombre</th>\n      <th>Email</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let jugador of jugadores\" >\n      <td>{{jugador.nombre}} </td>\n      <td>{{jugador.email}} </td>\n    </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/componentes/jugadores-listado/jugadores-listado.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JugadoresListadoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_usuarios_service__ = __webpack_require__("../../../../../src/app/servicios/usuarios.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JugadoresListadoComponent = (function () {
    function JugadoresListadoComponent(dao) {
        this.dao = dao;
        this.traerTodos();
    }
    JugadoresListadoComponent.prototype.ngOnInit = function () {
    };
    JugadoresListadoComponent.prototype.traerTodos = function () {
        var _this = this;
        this.dao.listar().then(function (data) {
            _this.jugadores = data;
        });
    };
    return JugadoresListadoComponent;
}());
JugadoresListadoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-jugadores-listado',
        template: __webpack_require__("../../../../../src/app/componentes/jugadores-listado/jugadores-listado.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/jugadores-listado/jugadores-listado.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servicios_usuarios_service__["a" /* UsuariosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__servicios_usuarios_service__["a" /* UsuariosService */]) === "function" && _a || Object])
], JugadoresListadoComponent);

var _a;
//# sourceMappingURL=jugadores-listado.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/listado-de-paises/listado-de-paises.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/listado-de-paises/listado-de-paises.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>\n Listado de paises\n</h1>\n<table class=\"table table-condensed\">\n  <thead>\n    <tr>\n      <th>Pais</th>\n      <th>Región</th>\n      <th>Nombre local</th>\n      <th>Sub Región</th>\n      <th>Población</th>\n      <th>Bandera</th>\n      <th>Capital</th>\n      <th>GPS</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let pais of listadoDePaises\">\n      <td>{{pais.name}} </td>\n      <td>{{pais.region}} </td> \n      <td>{{pais.nativeName}} </td> \n      <td>{{pais.subregion}} </td>       \n      <td>{{pais.population}} </td> \n      <td><img src='{{pais.flag}}' width=\"50px\"/> </td> \n      <td>{{pais.capital}} </td> \n      <td>{{pais.borders}} </td> \n      <td>{{pais.latlng}} </td> \n    </tr>\n   \n  </tbody>\n</table>"

/***/ }),

/***/ "../../../../../src/app/componentes/listado-de-paises/listado-de-paises.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListadoDePaisesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_paises_service__ = __webpack_require__("../../../../../src/app/servicios/paises.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListadoDePaisesComponent = (function () {
    function ListadoDePaisesComponent(servicioPaises) {
        this.miServicioDePaises = servicioPaises;
    }
    ListadoDePaisesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.miServicioDePaises.listar()
            .then(function (datos) {
            console.info("listado de paises", datos);
            _this.listadoDePaises = datos;
        });
    };
    return ListadoDePaisesComponent;
}());
ListadoDePaisesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-listado-de-paises',
        template: __webpack_require__("../../../../../src/app/componentes/listado-de-paises/listado-de-paises.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/listado-de-paises/listado-de-paises.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servicios_paises_service__["a" /* PaisesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__servicios_paises_service__["a" /* PaisesService */]) === "function" && _a || Object])
], ListadoDePaisesComponent);

var _a;
//# sourceMappingURL=listado-de-paises.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/listado-de-resultados/listado-de-resultados.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/listado-de-resultados/listado-de-resultados.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-condensed\">\n    <thead>\n      <tr>\n        <th>Fecha</th>\n        <th>Juego</th>\n        <th>Resultado</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let resultado of resultados\">\n        <td>{{resultado.time | date:'hh:mm dd/MM/yyyy' }} </td>\n        <td>{{resultado.juego}} </td>\n        <td *ngIf=\"resultado.gano\">Gano </td>\n        <td *ngIf=\"!resultado.gano\">Perdio</td>\n      </tr>\n    </tbody>\n  </table>\n"

/***/ }),

/***/ "../../../../../src/app/componentes/listado-de-resultados/listado-de-resultados.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListadoDeResultadosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_resultados_service__ = __webpack_require__("../../../../../src/app/servicios/resultados.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListadoDeResultadosComponent = (function () {
    function ListadoDeResultadosComponent(dao) {
        var _this = this;
        this.dao = dao;
        this.dao.listar().then(function (data) { _this.resultados = data; });
    }
    ListadoDeResultadosComponent.prototype.ngOnInit = function () {
    };
    return ListadoDeResultadosComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ListadoDeResultadosComponent.prototype, "resultados", void 0);
ListadoDeResultadosComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-listado-de-resultados',
        template: __webpack_require__("../../../../../src/app/componentes/listado-de-resultados/listado-de-resultados.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/listado-de-resultados/listado-de-resultados.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servicios_resultados_service__["a" /* ResultadosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__servicios_resultados_service__["a" /* ResultadosService */]) === "function" && _a || Object])
], ListadoDeResultadosComponent);

var _a;
//# sourceMappingURL=listado-de-resultados.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/listado/listado.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Style all font awesome icons */\n.fa {\n    padding: 20px;\n    font-size: 30px;\n    width: 50px;\n    text-align: center;\n    text-decoration: none;\n    border-radius: 50%;\n}\n\n/* Add a hover effect if you want */\n.fa:hover {\n    opacity: 0.7;\n}\n\n/* Set a specific color for each brand */\n\n/* Facebook */\n.fa-facebook {\n    background: #3B5998;\n    color: white;\n}\n\n/* Twitter */\n.fa-twitter {\n    background: #55ACEE;\n    color: white;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/listado/listado.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Page Wrapper -->\n<div id=\"wrapper\">\n    <app-sidebar></app-sidebar>\n\n    <!-- Content Wrapper -->\n    <div id=\"content-wrapper\" class=\"d-flex flex-column\">\n      <!-- Main Content -->\n      <div id=\"content\">\n        <app-header></app-header>\n        <div class=\"container-fluid\">\n          <!-- container-fluid -->\n          <router-outlet></router-outlet>\n          <!-- /.container-fluid -->\n        </div>\n        <!-- End of Main Content -->\n      </div>\n      <!-- End of Page Wrapper -->\n      <app-logout></app-logout>\n    </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/componentes/listado/listado.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListadoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_juego_service_service__ = __webpack_require__("../../../../../src/app/servicios/juego-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListadoComponent = (function () {
    function ListadoComponent(servicioJuego) {
        this.miServicioJuego = servicioJuego;
    }
    ListadoComponent.prototype.ngOnInit = function () {
    };
    ListadoComponent.prototype.llamaService = function () {
        this.listadoParaCompartir = this.miServicioJuego.listar();
    };
    ListadoComponent.prototype.llamaServicePromesa = function () {
        var _this = this;
        console.log("llamaServicePromesa");
        this.miServicioJuego.listarPromesa().then(function (listado) {
            _this.listadoParaCompartir = listado;
        });
    };
    return ListadoComponent;
}());
ListadoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-listado',
        template: __webpack_require__("../../../../../src/app/componentes/listado/listado.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/listado/listado.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servicios_juego_service_service__["a" /* JuegoServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__servicios_juego_service_service__["a" /* JuegoServiceService */]) === "function" && _a || Object])
], ListadoComponent);

var _a;
//# sourceMappingURL=listado.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/listados-menu/listados-menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/listados-menu/listados-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  listados-menu works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/componentes/listados-menu/listados-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListadosMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListadosMenuComponent = (function () {
    function ListadosMenuComponent() {
    }
    ListadosMenuComponent.prototype.ngOnInit = function () {
    };
    return ListadosMenuComponent;
}());
ListadosMenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-listados-menu',
        template: __webpack_require__("../../../../../src/app/componentes/listados-menu/listados-menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/listados-menu/listados-menu.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ListadosMenuComponent);

//# sourceMappingURL=listados-menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <!-- Outer Row -->\n  <div class=\"row justify-content-center\">\n\n    <div class=\"col-xl-10 col-lg-12 col-md-9\">\n\n      <div class=\"card o-hidden border-0 shadow-lg my-5\">\n        <div class=\"card-body p-0\">\n          <!-- Nested Row within Card Body -->\n          <div class=\"row\">\n            <div class=\"col-lg-6 d-none d-lg-block bg-login-image\"></div>\n            <div class=\"col-lg-6\">\n              <div class=\"p-5\">\n                <div class=\"text-center\">\n                  <h1 class=\"h4 text-gray-900 mb-4\">Bienvenido!</h1>\n                </div>\n                <form  class=\"user\" [formGroup]=\"loginForm\"  (ngSubmit)=\"Entrar()\" >\n                  <div class=\"form-group\">\n                    <input type=\"text\" [formControl]=\"email\" name=\"email\"  class=\"form-control form-control-user\" id=\"exampleInputEmail\" aria-describedby=\"emailHelp\" placeholder=\"Ingrese el usuario admin@sala.com\">\n                    <div *ngIf=\"EmailInput.invalid && (EmailInput.dirty || EmailInput.touched)\" class=\"alert alert-danger\">\n                      <div *ngIf=\"EmailInput.errors.required\">Complete con un email </div>\n                      <div *ngIf=\"EmailInput.errors.minlength\">Debe tener al menos  4 caracteres</div>\n                      <div *ngIf=\"EmailInput.errors.maxlength\">Debe tener maximo 255 caracteres</div>\n                      <div *ngIf=\"EmailInput.errors.pattern\">Formato de email valido</div>\n                    </div>\n                   </div>\n                  <div class=\"form-group\">\n                    <input type=\"password\" class=\"form-control form-control-user\"  [formControl]=\"password\" name=\"password\"   id=\"exampleInputPassword\" placeholder=\"Password\" placeholder=\"admin\">\n                    <div *ngIf=\"PasswordInput.invalid && (PasswordInput.dirty || PasswordInput.touched)\" class=\"alert alert-danger\">\n                        <div *ngIf=\"PasswordInput.errors.required\">Complete con un email </div>\n                        <div *ngIf=\"PasswordInput.errors.minlength\">Debe tener al menos  4 caracteres</div>\n                        <div *ngIf=\"PasswordInput.errors.maxlength\">Debe tener maximo 255 caracteres</div>\n                      </div>\n                  </div>\n                  <div *ngIf=\"!logeando\" class=\"progress\">\n                    <div class=\"progress-bar progress-bar-info progress-bar-striped active\" [class]=\"clase\" role=\"progressbar\" aria-valuenow=\"10\" aria-valuemin=\"0\" aria-valuemax=\"100\" [style.width]=\"ProgresoDeAncho\" >\n                      {{progresoMensaje}} - {{progreso}}%\n                    </div>\n                  </div>                  \n                  <button type=\"submit\" class=\"btn btn-primary btn-user btn-block\" [disabled]=\"!loginForm.valid\">Ingresar</button>\n                  <hr>\n                  <app-ayuda></app-ayuda>\n                </form>\n                <div class=\"text-center\">\n                  <a class=\"small\"  routerLink=\"/Registro\">Registrate!</a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n"

/***/ }),

/***/ "../../../../../src/app/componentes/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__servicios_usuarios_service__ = __webpack_require__("../../../../../src/app/servicios/usuarios.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ayuda_ayuda_component__ = __webpack_require__("../../../../../src/app/componentes/ayuda/ayuda.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__servicios_auth_service__ = __webpack_require__("../../../../../src/app/servicios/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = (function () {
    function LoginComponent(route, router, builder, dao, auth) {
        this.route = route;
        this.router = router;
        this.builder = builder;
        this.dao = dao;
        this.auth = auth;
        this.progresoMensaje = 'esperando...';
        this.logeando = true;
        this.clase = 'progress-bar progress-bar-info progress-bar-striped ';
        this.email = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](this.email, [
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].minLength(4),
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].maxLength(255),
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ]);
        this.password = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](this.password, [
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].minLength(4),
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].maxLength(255)
        ]);
        this.loginForm = this.builder.group({
            email: this.email,
            password: this.password,
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.email.setValue('admin@sala.com');
        this.password.setValue('admin');
    };
    LoginComponent.prototype.Entrar = function () {
        var _this = this;
        var email = this.EmailInput.value;
        var password = this.PasswordInput.value;
        //
        this.auth.login(email, password).then(function (data) {
            if (data.token) {
                _this.auth.saveToken(data.token);
                _this.router.navigate(['/']);
            }
        }).catch(function (e) {
            _this.ayuda.MostrarError('Error en las credenciales, por favor intente con otro usuario como admin@sala.com y admin ');
        });
    };
    Object.defineProperty(LoginComponent.prototype, "EmailInput", {
        get: function () {
            return this.loginForm.get('email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "PasswordInput", {
        get: function () {
            return this.loginForm.get('password');
        },
        enumerable: true,
        configurable: true
    });
    return LoginComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4__ayuda_ayuda_component__["a" /* AyudaComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__ayuda_ayuda_component__["a" /* AyudaComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ayuda_ayuda_component__["a" /* AyudaComponent */]) === "function" && _a || Object)
], LoginComponent.prototype, "ayuda", void 0);
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/componentes/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__servicios_usuarios_service__["a" /* UsuariosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__servicios_usuarios_service__["a" /* UsuariosService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__servicios_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__servicios_auth_service__["a" /* AuthService */]) === "function" && _f || Object])
], LoginComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/logout/logout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/logout/logout.component.html":
/***/ (function(module, exports) {

module.exports = " <!-- Scroll to Top Button-->\n <a class=\"scroll-to-top rounded\" href=\"#page-top\">\n    <i class=\"fas fa-angle-up\"></i>\n  </a>\n  <!-- Logout Modal-->\n  <div class=\"modal fade\" id=\"logoutModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n      <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h5 class=\"modal-title\" id=\"exampleModalLabel\">Seguro desea salir?</h5>\n            <button class=\"close\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">×</span>\n            </button>\n          </div>\n          <div class=\"modal-body\">Haga Click en salir si esta seguro que desea salir</div>\n          <div class=\"modal-footer\">\n            <button class=\"btn btn-secondary\" type=\"button\" data-dismiss=\"modal\">Cancelar</button>\n            <a class=\"btn btn-primary\" (click)=\"Salir()\" data-dismiss=\"modal\" >Salir</a>\n          </div>\n        </div>\n      </div>\n    </div>\n"

/***/ }),

/***/ "../../../../../src/app/componentes/logout/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicios_auth_service__ = __webpack_require__("../../../../../src/app/servicios/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogoutComponent = (function () {
    function LogoutComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    LogoutComponent.prototype.ngOnInit = function () {
    };
    LogoutComponent.prototype.Salir = function () {
        this.auth.logOut();
        this.router.navigate(['/']);
    };
    return LogoutComponent;
}());
LogoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-logout',
        template: __webpack_require__("../../../../../src/app/componentes/logout/logout.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/logout/logout.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__servicios_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__servicios_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LogoutComponent);

var _a, _b;
//# sourceMappingURL=logout.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/mapa-de-google/mapa-de-google.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\n    height: 300px;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/mapa-de-google/mapa-de-google.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>{{ title }}</h1>\n\n<!-- this creates a google map on the page with the given lat/lng from -->\n<!-- the component as the initial center of the map:\n\n<agm-map [latitude]=\"lat\" [longitude]=\"lng\"  (mapClick)=\"mapClicked($event)\">\n  <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n</agm-map>\n -->\n<input type =\"text\" [(ngModel)]=\"lat\" />\n<input type=\"text\" [(ngModel)]=\"lng\"/>\n"

/***/ }),

/***/ "../../../../../src/app/componentes/mapa-de-google/mapa-de-google.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapaDeGoogleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MapaDeGoogleComponent = (function () {
    function MapaDeGoogleComponent() {
        this.title = 'El Primer mapa';
        this.lat = 33.678418;
        this.lng = 5.809007;
        // google maps zoom level
        this.zoom = 8;
    }
    MapaDeGoogleComponent.prototype.ngOnInit = function () {
    };
    return MapaDeGoogleComponent;
}());
MapaDeGoogleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-mapa-de-google',
        template: __webpack_require__("../../../../../src/app/componentes/mapa-de-google/mapa-de-google.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/mapa-de-google/mapa-de-google.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MapaDeGoogleComponent);

//# sourceMappingURL=mapa-de-google.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/menu-card/menu-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n    transition: 0.3s;\n    border-radius: 5px; /* 5px rounded corners */\n    max-width: 300px;\n   height: 100%;\n    margin: 10px;\n    padding-bottom: 10px;\n    float: left;\n  background-color: #DEF3A6;\n    text-align: center;\n}\n\n/* Add rounded corners to the top left and the top right corner of the image */\nimg {\n    border-radius: 5px 5px 0 0;\n    width: 200px;\n    height: 200px;\n}/* Add some padding inside the card container */\n.container {\n    padding: 2px 16px;\n}\n\n\n.button{\n    margin-left: 1px;\n    display: inline-block;\n    width: 90%;\n    padding: 5px 15px;\n    font-size: 24px;\n    text-align: center;\n    cursor: pointer;\n    outline: none;\n    color: #fff;\n    background-color: #4CAF50;\n    border: none;\n    border-radius: 15px;\n    box-shadow: 0 9px #999;\n\n    border: none;\n    outline: 0;\n \n    padding: 8px;\n    color: white;\n   /* background-color: #000;*/\n    text-align: center;\n    cursor: pointer;\n    width: 100%;\n  }\n  \n  .button:hover {background-color: #3e8e41}\n  \n  .button:active {\n    background-color: #3e8e41;\n    box-shadow: 0 5px #666;\n    transform: translateY(4px);\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/menu-card/menu-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <!-- Agilidad -->\n  <div class=\"card\">\n    <img\n      class=\"img-thumbnail\"\n      src=\"./assets/imagenes/cerebro.jpg\"\n      alt=\"Avatar\"\n      style=\"width:100%\"\n    />\n    <h1>Velocidad y agilidad aritmética</h1>\n    <p class=\"title\">Juego de agilidad mental</p>\n    <p>UTN FRA</p>\n\n    <a href=\"#\"><i class=\"fa fa-dribbble\"></i></a>\n    <a href=\"#\"><i class=\"fa fa-twitter\"></i></a>\n    <a href=\"#\"><i class=\"fa fa-linkedin\"></i></a>\n    <a href=\"#\"><i class=\"fa fa-facebook\"></i></a>\n    <p><button class=\"button\" (click)=\"Juego('Agilidad')\">Jugar</button></p>\n  </div>\n\n  <!-- Piedra Papel o tijera -->\n  <div class=\"card\">\n    <img\n      class=\"img-thumbnail\"\n      src=\"./assets/imagenes/ppt.jpg\"\n      alt=\"Avatar\"\n      style=\"width:100%\"\n    />\n    <h1>Piedra Papel o Tijera</h1>\n    <p class=\"title\">Juega contra la máquina</p>\n    <p>UTN FRA</p>\n\n    <a href=\"#\"><i class=\"fa fa-dribbble\"></i></a>\n    <a href=\"#\"><i class=\"fa fa-twitter\"></i></a>\n    <a href=\"#\"><i class=\"fa fa-linkedin\"></i></a>\n    <a href=\"#\"><i class=\"fa fa-facebook\"></i></a>\n    <p><button class=\"button\" (click)=\"Juego('PiedraPapelTijera')\">Jugar</button></p>\n  </div>\n\n  <!-- Adivina -->\n  <div class=\"card\">\n    <img\n      class=\"img-thumbnail\"\n      src=\"./assets/imagenes/adivina.png\"\n      alt=\"Avatar\"\n      style=\"width:100%\"\n    />\n    <h1>Adivina el número secreto</h1>\n    <p class=\"title\">Juega de estrategia</p>\n    <p>UTN FRA</p>\n\n    <a href=\"#\"><i class=\"fa fa-dribbble\"></i></a>\n    <a href=\"#\"><i class=\"fa fa-twitter\"></i></a>\n    <a href=\"#\"><i class=\"fa fa-linkedin\"></i></a>\n    <a href=\"#\"><i class=\"fa fa-facebook\"></i></a>\n    <p><button class=\"button\" (click)=\"Juego('Adivina')\">Jugar</button></p>\n  </div>\n\n  <!-- Anagrama -->\n  <div class=\"card\">\n    <img\n      class=\"img-thumbnail\"\n      src=\"./assets/imagenes/adivina.png\"\n      alt=\"Avatar\"\n      style=\"width:100%\"\n    />\n    <h1>Anagrama</h1>\n    <p class=\"title\">Ejercita tu mente</p>\n    <p>Alumno</p>\n\n    <a href=\"#\"><i class=\"fa fa-dribbble\"></i></a>\n    <a href=\"#\"><i class=\"fa fa-twitter\"></i></a>\n    <a href=\"#\"><i class=\"fa fa-linkedin\"></i></a>\n    <a href=\"#\"><i class=\"fa fa-facebook\"></i></a>\n    <p><button class=\"button\" (click)=\"Juego('Anagrama')\">Jugar</button></p>\n  </div>\n\n  <!-- Tateti -->\n  <div class=\"card\">\n    <img\n      class=\"img-thumbnail\"\n      src=\"./assets/imagenes/adivina.png\"\n      alt=\"Avatar\"\n      style=\"width:100%\"\n    />\n    <h1>Tateti</h1>\n    <p class=\"title\">Ejercita tu mente</p>\n    <p>Alumno</p>\n\n    <a href=\"#\"><i class=\"fa fa-dribbble\"></i></a>\n    <a href=\"#\"><i class=\"fa fa-twitter\"></i></a>\n    <a href=\"#\"><i class=\"fa fa-linkedin\"></i></a>\n    <a href=\"#\"><i class=\"fa fa-facebook\"></i></a>\n    <p><button class=\"button\" (click)=\"Juego('Anagrama')\">Jugar</button></p>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/componentes/menu-card/menu-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuCardComponent = (function () {
    function MenuCardComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    MenuCardComponent.prototype.ngOnInit = function () {
    };
    return MenuCardComponent;
}());
MenuCardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-menu-card',
        template: __webpack_require__("../../../../../src/app/componentes/menu-card/menu-card.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/menu-card/menu-card.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], MenuCardComponent);

var _a, _b;
//# sourceMappingURL=menu-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/menu/menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "  <nav class=\"navbar navbar-inverse\">\n      <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n            <span class=\"icon-bar\"></span>\n\n          </button>\n          <a class=\"navbar-brand\" routerLink=\"/\">Inicio</a>\n        </div>\n        <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n            <ul class=\"nav navbar-nav\">\n                <li class=\"active\"><a routerLink=\"/Juegos\">Menú de Juegos</a></li>\n                <li><a data-toggle=\"tooltip\" title=\"Hooray!\" (click)=\"Juego('Adivina')\">Adivina</a></li>\n                <li><a  (click)=\"Juego('Agilidad')\">Agilidad</a></li>\n                <li><a  (click)=\"Juego('Tateti')\">Ta Te Ti</a></li>\n                <li><a  (click)=\"Juego('PiedraPapelTijera')\">Piedra Papel o Tijera</a></li>\n                <li><a  (click)=\"Juego('Anagrama')\">Anagrama</a></li>\n                <!--\n                <li><a  (click)=\"Juego('AdivinaMasListado')\">Adivina+listado</a></li>\n                <li><a  (click)=\"Juego('AgilidadaMasListado')\">Agilidad+listado</a></li>\n                -->\n              </ul>\n              <ul class=\"nav navbar-nav navbar-right\">\n                  <li><a href=\"#\"><span class=\"glyphicon glyphicon-user\"></span> Mis Datos</a></li>\n                  <li><a href=\"/Login\"><span class=\"glyphicon glyphicon-log-out\"></span> Salir</a></li>\n                </ul>\n        </div>\n      </div>\n    </nav>\n\n"

/***/ }),

/***/ "../../../../../src/app/componentes/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuComponent = (function () {
    function MenuComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent.prototype.Juego = function (tipo) {
        switch (tipo) {
            case 'Adivina':
                this.router.navigate(['/Juegos/Adivina']);
                break;
            case 'Agilidad':
                this.router.navigate(['/Juegos/Agilidad']);
                break;
            case 'Anagrama':
                this.router.navigate(['/Juegos/Anagrama']);
                break;
            case 'PiedraPapelTijera':
                this.router.navigate(['/Juegos/PiedraPapelTijera']);
                break;
            case 'Tateti':
                this.router.navigate(['/Juegos/Tateti']);
                break;
            case 'AdivinaMasListado':
                this.router.navigate(['/Juegos/AdivinaMasListado']);
                break;
            case 'AgilidadaMasListado':
                this.router.navigate(['/Juegos/AgilidadaMasListado']);
                break;
        }
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-menu',
        template: __webpack_require__("../../../../../src/app/componentes/menu/menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/menu/menu.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], MenuComponent);

var _a, _b;
//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".piedra, .papel, .tijera{\r\n    \r\n}\r\nimg{\r\n    width:12em;\r\n    cursor:pointer;\r\n}\r\n\r\n.piedra, .tijera{\r\n    margin-top:7em;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-lg-12\">\n      <h1>{{ nuevoJuego.nombre }}!</h1>\n      <app-ayuda ></app-ayuda>\n      <strong>Elegi entre Piedra, Papel o Tijera la Maquina hara lo mismo </strong>          \n    </div>\n</div>\n<div class=\"row \">        \n      <div class=\"col-lg-1\">              \n      </div>\n      <div class=\"col-lg-10\">        \n          <img  *ngIf=\"permitidoJugar\"  (click)=\"JugarPiedra()\" class=\"piedra\" alt=\"piedra\" src=\"./assets/imagenes/piedra.png\" />\n          <img  *ngIf=\"permitidoJugar\"  (click)=\"JugarPapel()\"  class=\"papel\" alt=\"papel\" src=\"./assets/imagenes/papel.png\"  />\n          <img  *ngIf=\"permitidoJugar\"  (click)=\"JugarTijera()\"  class=\"tijera\" alt=\"tijera\" src=\"./assets/imagenes/tijera.png\" />\n      </div>\n      <div class=\"col-lg-1\">              \n        </div>      \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PiedraPapelTijeraComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clases_juego_piedra_papel_tijera__ = __webpack_require__("../../../../../src/app/clases/juego-piedra-papel-tijera.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__juegos_juegos_component__ = __webpack_require__("../../../../../src/app/componentes/juegos/juegos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__servicios_resultados_service__ = __webpack_require__("../../../../../src/app/servicios/resultados.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__enums_opciones_enum__ = __webpack_require__("../../../../../src/app/enums/opciones.enum.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PiedraPapelTijeraComponent = (function (_super) {
    __extends(PiedraPapelTijeraComponent, _super);
    function PiedraPapelTijeraComponent(resultadosDao) {
        var _this = _super.call(this, resultadosDao) || this;
        _this.nuevoJuego = new __WEBPACK_IMPORTED_MODULE_1__clases_juego_piedra_papel_tijera__["a" /* JuegoPiedraPapelTijera */]();
        _this.permitidoJugar = true;
        return _this;
    }
    PiedraPapelTijeraComponent.prototype.JugarPiedra = function () {
        this.opcionUsuario = __WEBPACK_IMPORTED_MODULE_4__enums_opciones_enum__["a" /* Opcion */].Piedra;
        this.Jugar();
    };
    PiedraPapelTijeraComponent.prototype.JugarPapel = function () {
        this.opcionUsuario = __WEBPACK_IMPORTED_MODULE_4__enums_opciones_enum__["a" /* Opcion */].Papel;
        this.Jugar();
    };
    PiedraPapelTijeraComponent.prototype.JugarTijera = function () {
        this.opcionUsuario = __WEBPACK_IMPORTED_MODULE_4__enums_opciones_enum__["a" /* Opcion */].Tijera;
        this.Jugar();
    };
    PiedraPapelTijeraComponent.prototype.Reiniciar = function () {
        this.nuevoJuego.reiniciar();
        this.permitidoJugar = true;
    };
    PiedraPapelTijeraComponent.prototype.Delay = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    PiedraPapelTijeraComponent.prototype.Jugar = function () {
        var _this = this;
        this.permitidoJugar = false;
        this.nuevoJuego.OpcionDelUsuario = this.opcionUsuario;
        this.ayuda.MostrarMaquinaJugando();
        this.Delay(2000).then(function () {
            _this.ayuda.OcultarEsperando();
            _this.verificar();
        });
    };
    PiedraPapelTijeraComponent.prototype.verificar = function () {
        //
        var resultado = this.nuevoJuego.Resultado;
        if (this.nuevoJuego.verificar()) {
            this.ayuda.MostrarGanador('Elegiste ' + resultado + ' sos un Genio!');
        }
        else if (this.nuevoJuego.esEmpate) {
            this.ayuda.MostrarGanador('Elegiste ' + resultado + ' es empate!');
        }
        else {
            this.ayuda.MostrarPerdedor('Elegiste ' + resultado + ' te gano la maquina! ');
        }
        this.guardarResultado(this.nuevoJuego);
        this.Reiniciar();
    };
    PiedraPapelTijeraComponent.prototype.ShowMensaje = function (mensaje) {
        this.Mensaje = mensaje;
    };
    PiedraPapelTijeraComponent.prototype.ngOnInit = function () {
        this.nuevoJuego.iniciar();
    };
    return PiedraPapelTijeraComponent;
}(__WEBPACK_IMPORTED_MODULE_2__juegos_juegos_component__["a" /* JuegosComponent */]));
PiedraPapelTijeraComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-piedra-papel-tijera',
        template: __webpack_require__("../../../../../src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__servicios_resultados_service__["a" /* ResultadosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__servicios_resultados_service__["a" /* ResultadosService */]) === "function" && _a || Object])
], PiedraPapelTijeraComponent);

var _a;
//# sourceMappingURL=piedra-papel-tijera.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/popup/popup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/popup/popup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\" id=\"modalMensajes\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"PopUpModalLabel\" aria-hidden=\"true\" >\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\">\n        <p>{{mensaje}}</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">{{ botonTexto }} </button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/componentes/popup/popup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PopupComponent = (function () {
    function PopupComponent() {
        this.AlCerrar = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.AlCerrarMensajeFinal = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.reset();
    }
    PopupComponent.prototype.reset = function () {
        this.mensaje = '';
        this.mostrar = false;
        this.mensajeFinal = false;
        this.mensajeGanador = false;
        this.botonTexto = 'Cerrar';
    };
    Object.defineProperty(PopupComponent.prototype, "BotonTexto", {
        set: function (texto) {
            this.botonTexto = texto;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PopupComponent.prototype, "Hidden", {
        get: function () {
            return !this.mostrar;
        },
        enumerable: true,
        configurable: true
    });
    PopupComponent.prototype.Mostrar = function () {
        this.mostrar = true;
        // TODO MEJORAR
        // TODO hacer que se muestre
        var x = document.getElementById('modalMensajes');
        if (this.mensajeFinal) {
            x.className = (this.mensajeGanador) ? ' ganador ' : ' perdedor ';
        }
    };
    PopupComponent.prototype.MostrarFinal = function () {
        this.mensajeFinal = true;
        this.Mostrar();
    };
    PopupComponent.prototype.MostrarMensajeRegistro = function () {
        this.BotonTexto = 'Ir al Inicio';
        this.mensaje = 'El usuario se creo correctamente. Ingrese los mismos datos desde la pantalla de inicio.';
        this.Mostrar();
    };
    PopupComponent.prototype.MostrarMensaje = function (mensaje) {
        this.mensaje = mensaje;
        this.Mostrar();
    };
    PopupComponent.prototype.MostrarGanador = function (mensaje) {
        this.mensaje = mensaje;
        this.mensajeGanador = true;
        this.MostrarFinal();
    };
    PopupComponent.prototype.MostrarPerdedor = function (mensaje) {
        this.mensaje = mensaje;
        this.mensajeGanador = false;
        this.MostrarFinal();
    };
    PopupComponent.prototype.ClickCerrar = function () {
        this.mostrar = false;
        this.AlCerrar.emit();
        if (this.mensajeFinal) {
            this.AlCerrarMensajeFinal.emit();
        }
        this.reset();
    };
    PopupComponent.prototype.ngOnInit = function () {
        this.reset();
    };
    return PopupComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], PopupComponent.prototype, "mensaje", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], PopupComponent.prototype, "AlCerrar", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], PopupComponent.prototype, "AlCerrarMensajeFinal", void 0);
PopupComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-popup',
        template: __webpack_require__("../../../../../src/app/componentes/popup/popup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/popup/popup.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PopupComponent);

//# sourceMappingURL=popup.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/principal/principal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".imagenDeMenu{\nwidth: 80px;\nheight: 70px;\n}\n\n.hero-text {\n    text-align: center;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    color: #100000;\n    }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/principal/principal.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Page Wrapper -->\n<div id=\"wrapper\">\n  <app-sidebar></app-sidebar>\n\n  <!-- Content Wrapper -->\n  <div id=\"content-wrapper\" class=\"d-flex flex-column\">\n    <!-- Main Content -->\n    <div id=\"content\">\n      <app-header></app-header>\n\n      <div class=\"container-fluid\">\n        <!-- Page Heading -->\n        <div class=\"row\">\n          <!-- body -->\n          <div class=\"col-lg-6\">\n            <!-- Basic Card  -->\n            <div class=\"card shadow mb-4\">\n              <div class=\"card-header py-3\">\n                <h6 class=\"m-0 font-weight-bold text-primary\">Juegos</h6>\n              </div>\n              <div class=\"card-body\">\n                El método lúdico es un conjunto de estrategias diseñadas para\n                crear un ambiente de armonía en los estudiantes que están\n                inmersos en el proceso de aprendizaje. Este método busca que los\n                alumnos se apropien de los temas impartidos por los docentes\n                utilizando el juego.\n              </div>\n            </div>\n            <!-- Basic Card  -->\n            <div class=\"card shadow mb-4\">\n              <div class=\"card-header py-3\">\n                <h6 class=\"m-0 font-weight-bold text-primary\">\n                  Listados de resultados\n                </h6>\n              </div>\n              <div class=\"card-body\">\n                Los listados de los resultados con ordenamiento y busqueda.\n                <button\n                  type=\"button\"\n                  class=\"btn btn-primary\"\n                  routerLink=\"/Listados/Resultados\"\n                >\n                  Ingresar\n                </button>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-6\">\n\n            <!-- Basic Card  -->\n            <div class=\"card shadow mb-4\">\n              <div class=\"card-header py-3\">\n                <h6 class=\"m-0 font-weight-bold text-primary\">Jugadores</h6>\n              </div>\n              <div class=\"card-body\">\n                Listado de jugadores\n                <button\n                  type=\"button\"\n                  class=\"btn btn-primary\"\n                  routerLink=\"/Listados/Jugadores\"\n                >\n                  Ingresar\n                </button>\n              </div>\n            </div>\n          </div>\n          <!-- /. body -->\n        </div>\n      </div>\n      <!-- /.container-fluid -->\n    </div>\n    <!-- End of Main Content -->\n  </div>\n  <!-- End of Page Wrapper -->\n\n  <app-logout></app-logout>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/componentes/principal/principal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrincipalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrincipalComponent = (function () {
    function PrincipalComponent() {
        this.status = {
            isFirstOpen: true,
            isFirstDisabled: false
        };
    }
    PrincipalComponent.prototype.ngOnInit = function () {
    };
    return PrincipalComponent;
}());
PrincipalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-principal',
        template: __webpack_require__("../../../../../src/app/componentes/principal/principal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/principal/principal.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PrincipalComponent);

//# sourceMappingURL=principal.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/quien-soy/quien-soy.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".imagenDeQuienSoy{\n    width: 100%;\n   \n    }\nbody {\n    font: 20px Montserrat, sans-serif;\n    line-height: 1.8;\n    color: #f5f6f7;\n}\np {font-size: 16px;}\n.margin {margin-bottom: 45px;}\n.bg-1 { \n    background-color: #1abc9c; /* Green */\n    color: #ffffff;\n}\n.bg-2 { \n    background-color: #474e5d; /* Dark Blue */\n    color: #ffffff;\n}\n.bg-3 { \n    background-color: #ffffff; /* White */\n    color: #555555;\n}\n.bg-4 { \n    background-color: #2f2f2f; /* Black Gray */\n    color: #fff;\n}\n.container-fluid {\n    padding-top: 70px;\n    padding-bottom: 70px;\n}\n.navbar {\n    padding-top: 15px;\n    padding-bottom: 15px;\n    border: 0;\n    border-radius: 0;\n    margin-bottom: 0;\n    font-size: 12px;\n    letter-spacing: 5px;\n}\n.navbar-nav  li a:hover {\n    color: #1abc9c !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/quien-soy/quien-soy.component.html":
/***/ (function(module, exports) {

module.exports = " <!-- Page Wrapper -->\n <div id=\"wrapper\">\n\n    <app-sidebar></app-sidebar>\n\n    <!-- Content Wrapper -->\n    <div id=\"content-wrapper\" class=\"d-flex flex-column\">\n\n      <!-- Main Content -->\n      <div id=\"content\">\n\n        <app-header></app-header>\n\n        <div class=\"container-fluid\">\n          <!-- Page Heading -->\n          <div class=\"row\">\n            <!-- First Container -->\n            <div id=\"quiwn\" class=\"container-fluid bg-1 text-center\">\n                <h3 class=\"margin\">Quién Soy?</h3>\n                <img\n                  src=\"./assets/imagenes/quien-soy.png\"\n                  class=\"img-responsive img-circle margin\"\n                  style=\"display:inline\"\n                  alt=\"Duckula\"\n                  width=\"200\"\n                />\n                <h3>Soy Un alumno de la UTN FRA</h3>\n                <a href=\"https://github.com/avillucas/tp4-sala-de-juegos\" target=\"_blank\">Este Trabajo practico en GitHub</a>\n              </div>\n\n              <!-- Second Container -->\n              <div id=\"que\" class=\"container-fluid bg-2 text-center\">\n                <h3 class=\"margin\">Simon</h3>\n                <p>\n                  El Juego muestra  esta compuesto por luces de 4 colores que se prenden siguiendo una secuencia al azar\n                   luego de reconocerla el usuario debe ir introduciendo la secuencia mostrada en el orden correcto,\n                   ayudándose de su memoria  visual <!-- y sonora --> . Si lo consigue, éste responderá con una secuencia más larga,\n                    y así sucesivamente. Si falla, el usuario debe volver a empezar. Los distintos niveles de dificultad van\n                    aumentando la velocidad de la secuencia a repetir.\n                </p>\n              </div>\n              <!-- Second Container -->\n              <div id=\"que\" class=\"container-fluid bg-3 text-center\">\n                <h3 class=\"margin\">Esto es un trabajo práctico</h3>\n                <p>\n                  Cada universidad, cada facultad, cada carrera y obviamente cada materia en\n                  particular tiene estrategias didácticas y formas de evaluación diferentes. A\n                  pesar de que en muchos casos las universidades intentan estandarizar la\n                  forma de dictar clase para generar un orden en las planificaciones\n                  cuatrimestre a cuatrimestre, las formas de evaluación son elementales tanto\n                  para las instituciones y profesores como para los alumnos. A través de la\n                  evaluación formativa el educador busca información en el alumno para lograr\n                  comprender cómo se está produciendo el proceso de aprendizaje y poder\n                  reajustar los objetivos pedagógicos. Y para el alumno es una muestra del\n                  progreso que está logrando y si puede aplicar, materializar y darle\n                  visibilidad a la comprensión del tema. Según Black y William (1998), la\n                  evaluación formativa, ayuda a que los estudiantes sean independientes a la\n                  hora del aprendizaje, es decir, se presenta como receptor, autorregulador y\n                  centro de esa misma evaluación.\n                </p>\n                <a href=\"#\" class=\"btn btn-default btn-lg\">\n                  <span class=\"glyphicon glyphicon-file\"></span> Descargar PDF\n                </a>\n              </div>\n\n\n              <!-- Third Container (Grid) -->\n              <div id=\"donde\" class=\"container-fluid bg-3 text-center\">\n                <h3 class=\"margin\">Dónde Funciona?</h3>\n                <br />\n                <div class=\"row\">\n                  <div class=\"col-sm-4\">\n                    <p>\n                      Con las tecnologias WEB que permiten desarrollar aplicaciones\n                      multiplataforma\n                    </p>\n\n                  </div>\n                  <div class=\"col-sm-4\">\n                    <p>\n                      Principalmente orientada a la experiencia del usuario, garantizando que\n                      su funcionamieto sea fluido y pensado en el comportamiento del usuario y\n                      en la funcionalidad.\n                    </p>\n\n                  </div>\n                  <div class=\"col-sm-4\">\n                    <p>\n                      Para los sistemas operativos lideres en el mercado del consumo masivo\n                    </p>\n\n                  </div>\n                </div>\n              </div>\n\n          </div>\n\n        </div>\n        <!-- /.container-fluid -->\n\n      </div>\n      <!-- End of Main Content -->\n\n  </div>\n  <!-- End of Page Wrapper -->\n\n  <app-logout></app-logout>\n"

/***/ }),

/***/ "../../../../../src/app/componentes/quien-soy/quien-soy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuienSoyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuienSoyComponent = (function () {
    function QuienSoyComponent() {
    }
    QuienSoyComponent.prototype.ngOnInit = function () {
    };
    return QuienSoyComponent;
}());
QuienSoyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-quien-soy',
        template: __webpack_require__("../../../../../src/app/componentes/quien-soy/quien-soy.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/quien-soy/quien-soy.component.css")]
    }),
    __metadata("design:paramtypes", [])
], QuienSoyComponent);

//# sourceMappingURL=quien-soy.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/registro/registro.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/registro/registro.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"container\">\n\n      <div class=\"card o-hidden border-0 shadow-lg my-5\">\n        <div class=\"card-body p-0\">\n          <!-- Nested Row within Card Body -->\n          <div class=\"row\">\n            <div class=\"col-lg-5 d-none d-lg-block bg-register-image\"></div>\n            <div class=\"col-lg-7\">\n              <div class=\"p-5\">\n                <div class=\"text-center\">\n                  <h1 class=\"h4 text-gray-900 mb-4\">Crea tu cuenta!</h1>\n                </div>\n                <app-ayuda AlPresionarLogin=\"LlevarALogin()\" ></app-ayuda>\n                <form class=\"user\" [formGroup]=\"registroForm\"  (ngSubmit)=\"Registrar()\" >\n                  <div class=\"form-group\">\n                    <input type=\"nombre\" class=\"form-control form-control-user\"required [formControl]=\"nombre\" name=\"nombre\"   id=\"exampleInputNombre\" placeholder=\"Ingrese su nombre\">\n                    <div *ngIf=\"NombreInput.invalid && (NombreInput.dirty || NombreInput.touched)\" class=\"alert alert-danger\">\n                        <div *ngIf=\"NombreInput.errors.required\">Complete con un email </div>\n                        <div *ngIf=\"NombreInput.errors.minlength\">Debe tener al menos  4 caracteres</div>\n                        <div *ngIf=\"NombreInput.errors.maxlength\">Debe tener maximo 255 caracteres</div>                        \n                      </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <input type=\"email\" class=\"form-control form-control-user\" required [formControl]=\"email\" name=\"email\"   id=\"exampleInputEmail\" placeholder=\"Ingrese su email\">\n                    <div *ngIf=\"EmailInput.invalid && (EmailInput.dirty || EmailInput.touched)\" class=\"alert alert-danger\">\n                        <div *ngIf=\"EmailInput.errors.required\">Complete con un email </div>\n                        <div *ngIf=\"EmailInput.errors.minlength\">Debe tener al menos  4 caracteres</div>\n                        <div *ngIf=\"EmailInput.errors.maxlength\">Debe tener maximo 255 caracteres</div>\n                        <div *ngIf=\"EmailInput.errors.pattern\">Formato de email valido</div>\n                      </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <input type=\"password\" class=\"form-control form-control-user\" required [formControl]=\"password\" name=\"password\"  id=\"exampleInputPassword\" placeholder=\"Contraseña\">\n                    <div *ngIf=\"PasswordInput.invalid && (PasswordInput.dirty || PasswordInput.touched)\" class=\"alert alert-danger\">\n                        <div *ngIf=\"PasswordInput.errors.required\">Complete con un email </div>\n                        <div *ngIf=\"PasswordInput.errors.minlength\">Debe tener al menos  4 caracteres</div>\n                        <div *ngIf=\"PasswordInput.errors.maxlength\">Debe tener maximo 255 caracteres</div>                        \n                      </div>\n                  </div>                \n                  <button type=\"submit\" class=\"btn btn-primary btn-user btn-block\" [disabled]=\"!registroForm.valid\">Registrate</button>                  \n                </form>\n                <hr>\n                <div class=\"text-center\">\n                  <a class=\"small\"  routerLink=\"/Login\">Ya tiene una cuenta? Ingresar!</a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <app-popup ></app-popup>\n    <!--\n\n    <h2 id=\"terminos\">Terminos y condiciones</h2>\n    <p>El Gobierno de la República Argentina (en adelante el “Gobierno Nacional”) no es responsable por los daños y perjuicios que puedan surgir, incluyendo, sin límite, daños, pérdidas o gastos directos, indirectos, que surjan en relación con el uso de los Activos Digitales o la imposibilidad de uso, en relación con cualquier falla en el vencimiento, error, omisión, interrupción, defecto, demora en la operación o transmisión, virus de computadora o falla del sistema de línea, aún en el caso de que el Gobierno Nacional o sus representantes fueran informados sobre la posibilidad de dichos daños, pérdidas o gastos.</p>\n    <p>El Gobierno Nacional no controla ni garantiza la ausencia de virus ni de otros elementos en los contenidos que puedan producir alteraciones en su sistema informático (software y hardware) o en los documentos electrónicos y ficheros almacenados en su sistema informático.</p>\n    <p>El Gobierno Nacional no puede garantizar que la transmisión de información por parte de los Usuarios sea completamente segura. El Usuario asume este riesgo.</p>\n\n    -->\n"

/***/ }),

/***/ "../../../../../src/app/componentes/registro/registro.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__servicios_usuarios_service__ = __webpack_require__("../../../../../src/app/servicios/usuarios.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__popup_popup_component__ = __webpack_require__("../../../../../src/app/componentes/popup/popup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ayuda_ayuda_component__ = __webpack_require__("../../../../../src/app/componentes/ayuda/ayuda.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegistroComponent = (function () {
    function RegistroComponent(builder, router, dao) {
        this.builder = builder;
        this.router = router;
        this.dao = dao;
        this.nombre = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](this.nombre, [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].minLength(4),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].maxLength(255)
        ]);
        this.email = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](this.email, [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].minLength(4),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].maxLength(255),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ]);
        this.password = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](this.password, [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].minLength(4),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].maxLength(255)
        ]);
        this.registroForm = this.builder.group({
            nombre: this.nombre,
            email: this.email,
            password: this.password,
        });
    }
    RegistroComponent.prototype.ngOnInit = function () {
        this.nombre.setValue('tester');
        this.email.setValue('tester@tester.com');
        this.password.setValue('tester');
    };
    Object.defineProperty(RegistroComponent.prototype, "NombreInput", {
        get: function () {
            return this.registroForm.get('nombre');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegistroComponent.prototype, "EmailInput", {
        get: function () {
            return this.registroForm.get('email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegistroComponent.prototype, "PasswordInput", {
        get: function () {
            return this.registroForm.get('password');
        },
        enumerable: true,
        configurable: true
    });
    RegistroComponent.prototype.Registrar = function () {
        var _this = this;
        var nombre = this.NombreInput.value;
        var email = this.EmailInput.value;
        var password = this.PasswordInput.value;
        //
        this.dao.crear(nombre, email, password).then(function (data) {
            _this.ayuda.MostrarMensajeRegistro();
        }).catch(function (data) {
            _this.ayuda.MostrarError('Ocurrio un error al intentar registrar');
        });
    };
    RegistroComponent.prototype.LlevarALogin = function () {
        this.router.navigate(['/Login']);
    };
    return RegistroComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4__popup_popup_component__["a" /* PopupComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__popup_popup_component__["a" /* PopupComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__popup_popup_component__["a" /* PopupComponent */]) === "function" && _a || Object)
], RegistroComponent.prototype, "popup", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__ayuda_ayuda_component__["a" /* AyudaComponent */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__ayuda_ayuda_component__["a" /* AyudaComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ayuda_ayuda_component__["a" /* AyudaComponent */]) === "function" && _b || Object)
], RegistroComponent.prototype, "ayuda", void 0);
RegistroComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-registro',
        template: __webpack_require__("../../../../../src/app/componentes/registro/registro.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/registro/registro.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__servicios_usuarios_service__["a" /* UsuariosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__servicios_usuarios_service__["a" /* UsuariosService */]) === "function" && _e || Object])
], RegistroComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=registro.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/sidebar/sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Sidebar -->\n<ul class=\"navbar-nav bg-gradient-primary sidebar sidebar-dark accordion\" id=\"accordionSidebar\">\n\n  <!-- Sidebar - Brand -->\n  <a class=\"sidebar-brand d-flex align-items-center justify-content-center\" href=\"index.html\">\n    <div class=\"sidebar-brand-icon rotate-n-15\">\n      <i class=\"fas fa-laugh-wink\"></i>\n    </div>\n    <div class=\"sidebar-brand-text mx-3\">Sala de Juegos</div>\n  </a>\n\n  <!-- Divider -->\n  <hr class=\"sidebar-divider my-0\">\n\n  <!-- Nav Item - Dashboard -->\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" routerLink=\"/\">\n      <i class=\"fas fa-fw fa-tachometer-alt\"></i>\n      <span>Portada</span></a>\n  </li>\n\n  <!-- Divider -->\n  <hr class=\"sidebar-divider\">\n\n  <!-- Heading -->\n  <div class=\"sidebar-heading\">\n    Sala de Juegos\n  </div>\n  <!-- Nav Item - Pages Collapse Menu -->\n  <li class=\"nav-item \">\n    <a class=\"nav-link\" href=\"#\" data-toggle=\"collapse\" data-target=\"#collapsePages\"  aria-controls=\"collapsePages\">\n      <i class=\"fas fa-fw fa-folder\"></i>\n      <span>Juegos</span>\n    </a>\n    <div id=\"collapsePages\" class=\"collapse \" aria-labelledby=\"headingPages\" data-parent=\"#accordionSidebar\">\n      <div class=\"bg-white py-2 collapse-inner rounded\">\n          <a class=\"collapse-item\" routerLink=\"/Juegos/Adivina\">Adivina</a>\n          <a class=\"collapse-item\" routerLink=\"/Juegos/Agilidad\" >Agilidad</a>\n          <a class=\"collapse-item\" routerLink=\"/Juegos/Tateti\" >Ta Te Ti</a>\n          <a class=\"collapse-item\" routerLink=\"/Juegos/PiedraPapelTijera\" >Piedra Papel o Tijera</a>\n          <a class=\"collapse-item\" routerLink=\"/Juegos/Anagrama\" >Anagrama</a>\n          <a class=\"collapse-item\" routerLink=\"/Juegos/Simon\" >Simon</a>\n      </div>\n    </div>\n  </li>\n\n  <li class=\"nav-item \">\n    <a class=\"nav-link\" href=\"#\" data-toggle=\"collapse\" data-target=\"#collapseListados\"  aria-controls=\"collapsePages\">\n      <i class=\"fas fa-fw fa-folder\"></i>\n      <span>Listados</span>\n    </a>\n    <div id=\"collapseListados\" class=\"collapse \" aria-labelledby=\"headingPages\" data-parent=\"#accordionSidebar\">\n      <div class=\"bg-white py-2 collapse-inner rounded\">\n          <a class=\"collapse-item\" routerLink=\"/Listados/Jugadores\">Jugadores</a>\n          <a class=\"collapse-item\" routerLink=\"/Listados/Resultados\" >Resultados</a>\n      </div>\n    </div>\n  </li>\n\n  <li class=\"nav-item \">\n      <a class=\"nav-link\" routerLink=\"/Configuracion\">\n        <span>Configuracion</span>\n      </a>\n  </li>\n  <li class=\"nav-item \">\n      <a class=\"nav-link\" routerLink=\"/QuienSoy\">\n        <span>¿Quien Soy?</span>\n      </a>\n  </li>\n\n\n\n  <!-- Divider -->\n  <hr class=\"sidebar-divider d-none d-md-block\">\n  <!-- Sidebar Toggler (Sidebar)\n  <div class=\"text-center d-none d-md-inline\">\n    <button class=\"rounded-circle border-0\" id=\"sidebarToggle\"></button>\n  </div>\n   -->\n</ul>\n<!-- End of Sidebar -->\n"

/***/ }),

/***/ "../../../../../src/app/componentes/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sidebar',
        template: __webpack_require__("../../../../../src/app/componentes/sidebar/sidebar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/sidebar/sidebar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SidebarComponent);

//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/simon/simon.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".clickeable {\r\n  cursor: pointer;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/simon/simon.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-lg-10\">\n        <h1>{{ nuevoJuego.nombre }}!</h1>\n        <strong>Vamos a mostrarte {{ nuevoJuego.CantidadSecuenciasParaGanar }} secuencias de colores intenta replicarlas  para ganar </strong>\n    <br/>\n    <button (click)=\"NuevoJuego()\" class=\"btn btn-success btn-lg\"  [hidden]=\"ocultarNuevoJuego\" >Empezar!!</button>\n    <app-ayuda ></app-ayuda>\n  </div>\n</div>\n<div class=\"row\" [hidden]=\"!ocultarNuevoJuego\" >\n    <div class=\"col-lg-2\"></div>\n    <div class=\"col-lg-8 \">\n      <svg _ngcontent-c5=\"\" xml:space=\"preserve\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" id=\"Capa_1\" style=\"enable-background:new 0 0 512 512;\" version=\"1.1\" viewBox=\"0 0 512 512\" x=\"0px\" xmlns=\"http://www.w3.org/2000/svg\" y=\"0px\">\n        <path _ngcontent-c5=\"\" d=\"M256,0C115.3,0,0,115.3,0,256s115.3,256,256,256s256-115.3,256-256S396.7,0,256,0z\" style=\"fill:#495A79;\"></path>\n        <path _ngcontent-c5=\"\" d=\"M512,256c0,140.7-115.3,256-256,256V0C396.7,0,512,115.3,512,256z\" style=\"fill:#42516D;\"></path>\n        <path _ngcontent-c5=\"\" d=\"M433.495,271h-92.637L271,340.858v92.637c0,9.023,7.988,16.295,17.49,14.795\n          c81.812-13.77,146.03-77.988,159.8-159.8C449.828,279.353,442.761,271,433.495,271z\" class=\"clickeable\" id=\"colorVerde\"  (click)=\"PresionaVerde()\" style=\"fill:#25B987;opacity:0.2;\"  ></path>\n        <path _ngcontent-c5=\"\" d=\"M78.505,271c-9.265,0-16.333,8.353-14.795,17.49c13.77,81.812,77.988,146.03,159.8,159.8\n          c9.553,1.509,17.49-5.836,17.49-14.795v-92.637L171.142,271H78.505z\"  class=\"clickeable\" id=\"colorRojo\" (click)=\"PresionaRojo()\" style=\"fill:#D94158;opacity:0.2;\"></path>\n        <path _ngcontent-c5=\"\" d=\"M223.51,63.71c-81.812,13.77-146.03,77.988-159.8,159.8C62.172,232.647,69.24,241,78.505,241h92.637\n          L241,171.142V78.505C241,69.439,232.933,62.224,223.51,63.71z\"  class=\"clickeable\"  id=\"colorAmarillo\" (click)=\"PresionaAmarillo()\" style=\"fill:#FFCD33;opacity:0.2;\"></path>\n        <path _ngcontent-c5=\"\" d=\"M433.495,241c9.265,0,16.333-8.353,14.795-17.49c-13.77-81.812-77.988-146.03-159.8-159.8\n          C279.212,62.19,271,69.339,271,78.505v92.637L340.858,241H433.495z\" class=\"clickeable\"  id=\"colorAzul\" (click)=\"PresionaAzul()\" style=\"fill:#4596E6;opacity:0.2;\"></path>\n        <g _ngcontent-c5=\"\"> </g>\n        <g _ngcontent-c5=\"\"></g>\n        <g _ngcontent-c5=\"\"></g>\n        <g _ngcontent-c5=\"\"></g>\n        <g _ngcontent-c5=\"\"></g>\n        <g _ngcontent-c5=\"\"></g>\n        <g _ngcontent-c5=\"\"></g>\n        <g _ngcontent-c5=\"\"></g>\n        <g _ngcontent-c5=\"\"></g>\n        <g _ngcontent-c5=\"\"></g>\n        <g _ngcontent-c5=\"\"></g>\n        <g _ngcontent-c5=\"\"></g>\n        <g _ngcontent-c5=\"\"></g>\n        <g _ngcontent-c5=\"\"></g>\n        <g _ngcontent-c5=\"\"></g>\n      </svg>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/componentes/simon/simon.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__juegos_juegos_component__ = __webpack_require__("../../../../../src/app/componentes/juegos/juegos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicios_resultados_service__ = __webpack_require__("../../../../../src/app/servicios/resultados.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__clases_juego_simon__ = __webpack_require__("../../../../../src/app/clases/juego-simon.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__enums_colores_enum__ = __webpack_require__("../../../../../src/app/enums/colores.enum.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SimonComponent = (function (_super) {
    __extends(SimonComponent, _super);
    function SimonComponent(resultadosDao) {
        var _this = _super.call(this, resultadosDao) || this;
        _this.nuevoJuego = new __WEBPACK_IMPORTED_MODULE_3__clases_juego_simon__["a" /* JuegoSimon */]();
        _this.reiniciar();
        return _this;
    }
    SimonComponent.prototype.MostrarSiguienteColor = function () {
        var _this = this;
        if (this.nuevoJuego.SecuenciaMostrada) {
            return;
        }
        var color = this.nuevoJuego.SiguienteColorAMostrar;
        switch (color) {
            case __WEBPACK_IMPORTED_MODULE_4__enums_colores_enum__["a" /* Colores */].Amarillo:
                this.prenderAmarillo().then(function () { _this.MostrarSiguienteColor(); });
                break;
            case __WEBPACK_IMPORTED_MODULE_4__enums_colores_enum__["a" /* Colores */].Azul:
                this.prenderAzul().then(function () { _this.MostrarSiguienteColor(); });
                break;
            case __WEBPACK_IMPORTED_MODULE_4__enums_colores_enum__["a" /* Colores */].Verde:
                this.prenderVerde().then(function () { _this.MostrarSiguienteColor(); });
                break;
            case __WEBPACK_IMPORTED_MODULE_4__enums_colores_enum__["a" /* Colores */].Rojo:
                this.prenderRojo().then(function () { _this.MostrarSiguienteColor(); });
                break;
        }
    };
    SimonComponent.prototype.MostrarSecuencia = function () {
        this.emitiendo = true;
        this.MostrarSiguienteColor();
    };
    SimonComponent.prototype.NuevoJuego = function () {
        this.ocultarNuevoJuego = true;
        this.MaquinaJugar();
    };
    SimonComponent.prototype.MaquinaJugar = function () {
        // Primer valor de la secuencia
        this.nuevoJuego.Jugar();
        // Mostrar en pantalla
        this.MostrarSecuencia();
    };
    SimonComponent.prototype.ngOnInit = function () {
        this.nuevoJuego.iniciar();
    };
    SimonComponent.prototype.reiniciar = function () {
        this.nuevoJuego.reiniciar();
        this.ocultarNuevoJuego = false;
        this.emitiendo = false;
        clearInterval(this.repetidor);
    };
    SimonComponent.prototype.verificar = function () {
        this.nuevoJuego.verificar();
        if (this.nuevoJuego.JuegoTerminado) {
            if (this.nuevoJuego.gano) {
                this.ayuda.MostrarGanador('Lo resolviste sos un Genio!');
            }
            else {
                this.ayuda.MostrarPerdedor('Te equivocaste!!! ' + this.nuevoJuego.SecuenciaCorrecta);
            }
            this.guardarResultado(this.nuevoJuego);
        }
        else {
            if (this.nuevoJuego.LeTocaALaMaquina) {
                this.MaquinaJugar();
            }
        }
    };
    SimonComponent.prototype.PresionaVerde = function () {
        var _this = this;
        if (!this.nuevoJuego.JuegoTerminado) {
            this.prenderVerde().then(function () { _this.usuarioJuega(__WEBPACK_IMPORTED_MODULE_4__enums_colores_enum__["a" /* Colores */].Verde); });
        }
    };
    SimonComponent.prototype.PresionaAzul = function () {
        var _this = this;
        if (!this.nuevoJuego.JuegoTerminado) {
            this.prenderAzul().then(function () { _this.usuarioJuega(__WEBPACK_IMPORTED_MODULE_4__enums_colores_enum__["a" /* Colores */].Azul); });
        }
    };
    SimonComponent.prototype.PresionaAmarillo = function () {
        var _this = this;
        if (!this.nuevoJuego.JuegoTerminado) {
            this.prenderAmarillo().then(function () { _this.usuarioJuega(__WEBPACK_IMPORTED_MODULE_4__enums_colores_enum__["a" /* Colores */].Amarillo); });
        }
    };
    SimonComponent.prototype.PresionaRojo = function () {
        var _this = this;
        if (!this.nuevoJuego.JuegoTerminado) {
            this.prenderRojo().then(function () { _this.usuarioJuega(__WEBPACK_IMPORTED_MODULE_4__enums_colores_enum__["a" /* Colores */].Rojo); });
        }
    };
    SimonComponent.prototype.usuarioJuega = function (color) {
        this.nuevoJuego.ColorIngresado = color;
        this.verificar();
    };
    SimonComponent.prototype.prenderAmarillo = function () {
        this.siguienteLuz = 'colorAmarillo';
        return this.parpadear();
    };
    SimonComponent.prototype.prenderVerde = function () {
        this.siguienteLuz = 'colorVerde';
        return this.parpadear();
    };
    SimonComponent.prototype.prenderRojo = function () {
        this.siguienteLuz = 'colorRojo';
        return this.parpadear();
    };
    SimonComponent.prototype.prenderAzul = function () {
        this.siguienteLuz = 'colorAzul';
        return this.parpadear();
    };
    SimonComponent.prototype.parpadear = function () {
        var _this = this;
        var promise = new Promise(function (resolver) {
            _this.prenderLuz();
            setTimeout(function () {
                _this.apagarLuz();
                setTimeout(function () {
                    resolver();
                }, _this.nuevoJuego.TiempoApagado);
            }, _this.nuevoJuego.Demora);
        });
        return promise;
    };
    SimonComponent.prototype.prenderLuz = function () {
        document.getElementById(this.siguienteLuz).style.opacity = '1';
    };
    SimonComponent.prototype.apagarLuz = function () {
        document.getElementById(this.siguienteLuz).style.opacity = '0.3';
    };
    return SimonComponent;
}(__WEBPACK_IMPORTED_MODULE_1__juegos_juegos_component__["a" /* JuegosComponent */]));
SimonComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-simon',
        template: __webpack_require__("../../../../../src/app/componentes/simon/simon.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/simon/simon.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__servicios_resultados_service__["a" /* ResultadosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__servicios_resultados_service__["a" /* ResultadosService */]) === "function" && _a || Object])
], SimonComponent);

var _a;
//# sourceMappingURL=simon.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/tateti-casillero/tateti-casillero.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2 {\r\n  font-size: 1em;\r\n}\r\nbutton,\r\nspan {\r\n  display: block;\r\n  overflow: hidden;\r\n  width: 100px;\r\n  height: 100px;\r\n  background-color:#999;\r\n}\r\nspan {\r\n  text-align: center;\r\n  line-height: 100px;\r\n  font-size:50px;\r\n  background-color:red;\r\n  cursor:initial;\r\n}\r\nspan.bloqueado{\r\n  background-color:#999;\r\n}\r\nbutton {\r\n  cursor: pointer;\r\n  text-indent: -9999em;\r\n}\r\nbutton:disabled {\r\n  cursor: auto;\r\n}\r\ntable {\r\n  border: collapse;\r\n}\r\ntd.superior {\r\n  border-top: bold solid black;\r\n}\r\ntd.inferior {\r\n  border-bottom: bold solid black;\r\n}\r\ntd.derecho {\r\n  border-right: bold solid black;\r\n}\r\ntd.izquierdo {\r\n  border-left: bold solid black;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/tateti-casillero/tateti-casillero.component.html":
/***/ (function(module, exports) {

module.exports = "<button *ngIf=\"!tomado\" (click)=\"onClick()\">ELEGIR</button>\n<span *ngIf=\"tomado && deUsuario\" >X</span>\n<span *ngIf=\"tomado && deMaquina\" >O</span>\n<span *ngIf=\"tomado && !deMaquina  && !deUsuario\" class=\"bloqueado\"></span>\n\n"

/***/ }),

/***/ "../../../../../src/app/componentes/tateti-casillero/tateti-casillero.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TatetiCasilleroComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TatetiCasilleroComponent = (function () {
    function TatetiCasilleroComponent() {
        this.TomarCasillero = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.tomado = false;
        this.deUsuario = false;
        this.deMaquina = false;
    }
    TatetiCasilleroComponent.prototype.ngOnInit = function () {
    };
    TatetiCasilleroComponent.prototype.onClick = function () {
        if (this.tomado) {
            return false;
        }
        this.tomado = true;
        this.deUsuario = true;
        this.TomarCasillero.emit();
        this.deMaquina = false;
    };
    return TatetiCasilleroComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tomado'),
    __metadata("design:type", Boolean)
], TatetiCasilleroComponent.prototype, "tomado", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('deMaquina'),
    __metadata("design:type", Boolean)
], TatetiCasilleroComponent.prototype, "deMaquina", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], TatetiCasilleroComponent.prototype, "TomarCasillero", void 0);
TatetiCasilleroComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-tateti-casillero',
        template: __webpack_require__("../../../../../src/app/componentes/tateti-casillero/tateti-casillero.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/tateti-casillero/tateti-casillero.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TatetiCasilleroComponent);

//# sourceMappingURL=tateti-casillero.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/tateti/tateti.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2{\r\n    font-size:1em\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/tateti/tateti.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n    <h1>{{ nuevoJuego.nombre }}!</h1>\n    <h2>Juga un tateti tenes las  X para competir contra la maquina </h2>\n</div>\n<app-ayuda></app-ayuda>\n<div class=\"row\">\n    <div class=\"col-3\"></div>\n    <div class=\"col-6 \">\n        <table>\n          <tr>\n            <td class=\"derecho inferior superior izquierdo\"><app-tateti-casillero  [tomado]=\"EstaTomado(1)\"  [deMaquina]=\"EsDeMaquina(1)\"  (TomarCasillero)=\"Tomar(1)\"  ></app-tateti-casillero></td>\n            <td class=\"derecho inferior superior izquierdo\"><app-tateti-casillero  [tomado]=\"EstaTomado(2)\"  [deMaquina]=\"EsDeMaquina(2)\"  (TomarCasillero)=\"Tomar(2)\"  ></app-tateti-casillero></td>\n            <td class=\"derecho inferior superior izquierdo\"><app-tateti-casillero  [tomado]=\"EstaTomado(3)\"  [deMaquina]=\"EsDeMaquina(3)\"  (TomarCasillero)=\"Tomar(3)\"  ></app-tateti-casillero></td>\n          </tr>\n          <tr>\n              <td class=\"derecho inferior superior izquierdo\"><app-tateti-casillero  [tomado]=\"EstaTomado(4)\"  [deMaquina]=\"EsDeMaquina(4)\"  (TomarCasillero)=\"Tomar(4)\"  ></app-tateti-casillero></td>\n              <td class=\"derecho inferior superior izquierdo\"><app-tateti-casillero  [tomado]=\"EstaTomado(5)\"  [deMaquina]=\"EsDeMaquina(5)\"  (TomarCasillero)=\"Tomar(5)\"  ></app-tateti-casillero></td>\n              <td class=\"derecho inferior superior izquierdo\"><app-tateti-casillero  [tomado]=\"EstaTomado(6)\"  [deMaquina]=\"EsDeMaquina(6)\"  (TomarCasillero)=\"Tomar(6)\"  ></app-tateti-casillero></td>\n          </tr>\n          <tr>\n              <td class=\"derecho inferior superior izquierdo\"><app-tateti-casillero  [tomado]=\"EstaTomado(7)\"  [deMaquina]=\"EsDeMaquina(7)\"  (TomarCasillero)=\"Tomar(7)\"  ></app-tateti-casillero></td>\n              <td class=\"derecho inferior superior izquierdo\"><app-tateti-casillero  [tomado]=\"EstaTomado(8)\"  [deMaquina]=\"EsDeMaquina(8)\"  (TomarCasillero)=\"Tomar(8)\"  ></app-tateti-casillero></td>\n              <td class=\"derecho inferior superior izquierdo\"><app-tateti-casillero  [tomado]=\"EstaTomado(9)\"  [deMaquina]=\"EsDeMaquina(9)\"   (TomarCasillero)=\"Tomar(9)\"  ></app-tateti-casillero></td>\n          </tr>\n        </table>\n    </div>\n    <div class=\"col-3\"></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/componentes/tateti/tateti.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TatetiComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clases_juego_tateti__ = __webpack_require__("../../../../../src/app/clases/juego-tateti.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__juegos_juegos_component__ = __webpack_require__("../../../../../src/app/componentes/juegos/juegos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__servicios_resultados_service__ = __webpack_require__("../../../../../src/app/servicios/resultados.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TatetiComponent = (function (_super) {
    __extends(TatetiComponent, _super);
    function TatetiComponent(resultadosDao) {
        var _this = _super.call(this, resultadosDao) || this;
        _this.enviarJuego = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.nuevoJuego = new __WEBPACK_IMPORTED_MODULE_1__clases_juego_tateti__["a" /* JuegoTateti */]();
        return _this;
    }
    TatetiComponent.prototype.EstaTomado = function (indice) {
        return this.nuevoJuego.EstaTomado(indice);
    };
    TatetiComponent.prototype.EsDeMaquina = function (indice) {
        return this.nuevoJuego.EsDeMaquina(indice);
    };
    TatetiComponent.prototype.Tomar = function (nroCasillero) {
        if (this.nuevoJuego.QuedanMovidas()) {
            // juega el jugador
            var casilleroTomadoJugador = this.nuevoJuego.JugadorTomarCasillero(nroCasillero);
            console.info('Jugador:', casilleroTomadoJugador);
            // delay
            this.Verificar();
            if (this.nuevoJuego.QuedanMovidas()) {
                var casilleroTomadoMaquina = this.nuevoJuego.MaquinaJugar();
                console.info('Maquina:', casilleroTomadoMaquina);
                this.Verificar();
            }
        }
    };
    TatetiComponent.prototype.Verificar = function () {
        this.nuevoJuego.verificar();
        if (!this.nuevoJuego.QuedanMovidas()) {
            if (this.nuevoJuego.gano) {
                this.enviarJuego.emit(this.nuevoJuego);
                this.ayuda.MostrarGanador('Ganaste sos un Genio!!!');
            }
            else {
                this.ayuda.MostrarPerdedor('La Maquina te gano!!');
            }
            this.guardarResultado(this.nuevoJuego);
        }
    };
    TatetiComponent.prototype.Reiniciar = function () {
        this.nuevoJuego.reiniciar();
    };
    TatetiComponent.prototype.ngOnInit = function () {
        this.nuevoJuego.iniciar();
    };
    return TatetiComponent;
}(__WEBPACK_IMPORTED_MODULE_2__juegos_juegos_component__["a" /* JuegosComponent */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], TatetiComponent.prototype, "enviarJuego", void 0);
TatetiComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-tateti',
        template: __webpack_require__("../../../../../src/app/componentes/tateti/tateti.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/tateti/tateti.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__servicios_resultados_service__["a" /* ResultadosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__servicios_resultados_service__["a" /* ResultadosService */]) === "function" && _b || Object])
], TatetiComponent);

var _a, _b;
//# sourceMappingURL=tateti.component.js.map

/***/ }),

/***/ "../../../../../src/app/enums/ayudas.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ayuda; });
var Ayuda;
(function (Ayuda) {
    Ayuda[Ayuda["Primary"] = 0] = "Primary";
    Ayuda[Ayuda["Secondary"] = 1] = "Secondary";
    Ayuda[Ayuda["Success"] = 2] = "Success";
    Ayuda[Ayuda["Danger"] = 3] = "Danger";
    Ayuda[Ayuda["Warning"] = 4] = "Warning";
    Ayuda[Ayuda["Info"] = 5] = "Info";
    Ayuda[Ayuda["Light"] = 6] = "Light";
    Ayuda[Ayuda["Dark"] = 7] = "Dark";
})(Ayuda || (Ayuda = {}));
//# sourceMappingURL=ayudas.enum.js.map

/***/ }),

/***/ "../../../../../src/app/enums/casilleros.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Casillero; });
var Casillero;
(function (Casillero) {
    Casillero[Casillero["A1"] = 1] = "A1";
    Casillero[Casillero["B1"] = 2] = "B1";
    Casillero[Casillero["C1"] = 3] = "C1";
    Casillero[Casillero["A2"] = 4] = "A2";
    Casillero[Casillero["B2"] = 5] = "B2";
    Casillero[Casillero["C2"] = 6] = "C2";
    Casillero[Casillero["A3"] = 7] = "A3";
    Casillero[Casillero["B3"] = 8] = "B3";
    Casillero[Casillero["C3"] = 9] = "C3";
})(Casillero || (Casillero = {}));
//# sourceMappingURL=casilleros.enum.js.map

/***/ }),

/***/ "../../../../../src/app/enums/colores.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Colores; });
var Colores;
(function (Colores) {
    Colores[Colores["Rojo"] = 1] = "Rojo";
    Colores[Colores["Amarillo"] = 2] = "Amarillo";
    Colores[Colores["Azul"] = 3] = "Azul";
    Colores[Colores["Verde"] = 4] = "Verde";
    Colores[Colores["Naranja"] = 5] = "Naranja";
})(Colores || (Colores = {}));
//# sourceMappingURL=colores.enum.js.map

/***/ }),

/***/ "../../../../../src/app/enums/opciones.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Opcion; });
var Opcion;
(function (Opcion) {
    Opcion[Opcion["Piedra"] = 0] = "Piedra";
    Opcion[Opcion["Papel"] = 1] = "Papel";
    Opcion[Opcion["Tijera"] = 2] = "Tijera";
})(Opcion || (Opcion = {}));
//# sourceMappingURL=opciones.enum.js.map

/***/ }),

/***/ "../../../../../src/app/enums/operadores.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Operador; });
var Operador;
(function (Operador) {
    Operador[Operador["Suma"] = 0] = "Suma";
    Operador[Operador["Resta"] = 1] = "Resta";
    Operador[Operador["Division"] = 2] = "Division";
    Operador[Operador["Multiplicacion"] = 3] = "Multiplicacion";
})(Operador || (Operador = {}));
//# sourceMappingURL=operadores.enum.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth-guard.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicios_auth_service__ = __webpack_require__("../../../../../src/app/servicios/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardGuard = (function () {
    function AuthGuardGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardGuard.prototype.canActivate = function () {
        if (this.auth.isLogued()) {
            return true;
        }
        this.router.navigate(['/Login']);
        return false;
    };
    return AuthGuardGuard;
}());
AuthGuardGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__servicios_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__servicios_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuardGuard);

var _a, _b;
//# sourceMappingURL=auth-guard.guard.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/alert-class.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertClassPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enums_ayudas_enum__ = __webpack_require__("../../../../../src/app/enums/ayudas.enum.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AlertClassPipe = (function () {
    function AlertClassPipe() {
    }
    AlertClassPipe.prototype.transform = function (value) {
        return ' alert-' + __WEBPACK_IMPORTED_MODULE_1__enums_ayudas_enum__["a" /* Ayuda */][value].toString().toLowerCase() + ' ';
    };
    return AlertClassPipe;
}());
AlertClassPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'alertClass'
    })
], AlertClassPipe);

//# sourceMappingURL=alert-class.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/operador.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OperadorPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enums_operadores_enum__ = __webpack_require__("../../../../../src/app/enums/operadores.enum.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var OperadorPipe = (function () {
    function OperadorPipe() {
    }
    OperadorPipe.prototype.transform = function (value, args) {
        var signo;
        switch (value) {
            case __WEBPACK_IMPORTED_MODULE_1__enums_operadores_enum__["a" /* Operador */].Suma:
                signo = '+';
                break;
            case __WEBPACK_IMPORTED_MODULE_1__enums_operadores_enum__["a" /* Operador */].Resta:
                signo = '-';
                break;
            case __WEBPACK_IMPORTED_MODULE_1__enums_operadores_enum__["a" /* Operador */].Division:
                signo = '/';
                break;
            case __WEBPACK_IMPORTED_MODULE_1__enums_operadores_enum__["a" /* Operador */].Multiplicacion:
                signo = '*';
                break;
        }
        return signo;
    };
    return OperadorPipe;
}());
OperadorPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'operador'
    })
], OperadorPipe);

//# sourceMappingURL=operador.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/sexo.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SexoPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SexoPipe = (function () {
    function SexoPipe() {
    }
    SexoPipe.prototype.transform = function (value, args) {
        if (value = 'M') {
            return 'machito';
        }
        else {
            return 'señorita';
        }
    };
    return SexoPipe;
}());
SexoPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'sexo'
    })
], SexoPipe);

//# sourceMappingURL=sexo.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/ruteando/ruteando.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RuteandoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__componentes_adivina_el_numero_adivina_el_numero_component__ = __webpack_require__("../../../../../src/app/componentes/adivina-el-numero/adivina-el-numero.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__componentes_listado_de_resultados_listado_de_resultados_component__ = __webpack_require__("../../../../../src/app/componentes/listado-de-resultados/listado-de-resultados.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__componentes_login_login_component__ = __webpack_require__("../../../../../src/app/componentes/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__componentes_error_error_component__ = __webpack_require__("../../../../../src/app/componentes/error/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__componentes_principal_principal_component__ = __webpack_require__("../../../../../src/app/componentes/principal/principal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__componentes_agilidad_aritmetica_agilidad_aritmetica_component__ = __webpack_require__("../../../../../src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__componentes_listado_listado_component__ = __webpack_require__("../../../../../src/app/componentes/listado/listado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__componentes_juegos_juegos_component__ = __webpack_require__("../../../../../src/app/componentes/juegos/juegos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__componentes_registro_registro_component__ = __webpack_require__("../../../../../src/app/componentes/registro/registro.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__componentes_menu_card_menu_card_component__ = __webpack_require__("../../../../../src/app/componentes/menu-card/menu-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__componentes_quien_soy_quien_soy_component__ = __webpack_require__("../../../../../src/app/componentes/quien-soy/quien-soy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__componentes_listado_de_paises_listado_de_paises_component__ = __webpack_require__("../../../../../src/app/componentes/listado-de-paises/listado-de-paises.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__componentes_jugadores_listado_jugadores_listado_component__ = __webpack_require__("../../../../../src/app/componentes/jugadores-listado/jugadores-listado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__componentes_anagrama_anagrama_component__ = __webpack_require__("../../../../../src/app/componentes/anagrama/anagrama.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__componentes_tateti_tateti_component__ = __webpack_require__("../../../../../src/app/componentes/tateti/tateti.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__componentes_piedra_papel_tijera_piedra_papel_tijera_component__ = __webpack_require__("../../../../../src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__guards_auth_guard_guard__ = __webpack_require__("../../../../../src/app/guards/auth-guard.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__componentes_listados_menu_listados_menu_component__ = __webpack_require__("../../../../../src/app/componentes/listados-menu/listados-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__componentes_simon_simon_component__ = __webpack_require__("../../../../../src/app/componentes/simon/simon.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__componentes_configuracion_configuracion_component__ = __webpack_require__("../../../../../src/app/componentes/configuracion/configuracion.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// importo del module principal





















// declaro donde quiero que se dirija
var MiRuteo = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__componentes_principal_principal_component__["a" /* PrincipalComponent */] },
    { path: 'Login', component: __WEBPACK_IMPORTED_MODULE_4__componentes_login_login_component__["a" /* LoginComponent */] },
    //{ path: 'Jugadores', component: JugadoresListadoComponent, canActivate: [AuthGuardGuard] },
    // { path: 'Mapa', component: MapaDeGoogleComponent },
    { path: 'QuienSoy', component: __WEBPACK_IMPORTED_MODULE_12__componentes_quien_soy_quien_soy_component__["a" /* QuienSoyComponent */] },
    { path: 'Registro', component: __WEBPACK_IMPORTED_MODULE_10__componentes_registro_registro_component__["a" /* RegistroComponent */] },
    //{ path: 'Principal', component: PrincipalComponent },
    { path: 'Configuracion', component: __WEBPACK_IMPORTED_MODULE_21__componentes_configuracion_configuracion_component__["a" /* ConfiguracionComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__guards_auth_guard_guard__["a" /* AuthGuardGuard */]] },
    {
        path: 'Listados',
        component: __WEBPACK_IMPORTED_MODULE_8__componentes_listado_listado_component__["a" /* ListadoComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_19__componentes_listados_menu_listados_menu_component__["a" /* ListadosMenuComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__guards_auth_guard_guard__["a" /* AuthGuardGuard */]] },
            { path: 'Jugadores', component: __WEBPACK_IMPORTED_MODULE_14__componentes_jugadores_listado_jugadores_listado_component__["a" /* JugadoresListadoComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__guards_auth_guard_guard__["a" /* AuthGuardGuard */]] },
            { path: 'Resultados', component: __WEBPACK_IMPORTED_MODULE_3__componentes_listado_de_resultados_listado_de_resultados_component__["a" /* ListadoDeResultadosComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__guards_auth_guard_guard__["a" /* AuthGuardGuard */]] },
            { path: 'Paises', component: __WEBPACK_IMPORTED_MODULE_13__componentes_listado_de_paises_listado_de_paises_component__["a" /* ListadoDePaisesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__guards_auth_guard_guard__["a" /* AuthGuardGuard */]] },
        ]
    },
    //  { path: 'Paises', component: ListadoDePaisesComponent },
    {
        path: 'Juegos',
        component: __WEBPACK_IMPORTED_MODULE_9__componentes_juegos_juegos_component__["a" /* JuegosComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_11__componentes_menu_card_menu_card_component__["a" /* MenuCardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__guards_auth_guard_guard__["a" /* AuthGuardGuard */]] },
            { path: 'Adivina', component: __WEBPACK_IMPORTED_MODULE_2__componentes_adivina_el_numero_adivina_el_numero_component__["a" /* AdivinaElNumeroComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__guards_auth_guard_guard__["a" /* AuthGuardGuard */]] },
            { path: 'Agilidad', component: __WEBPACK_IMPORTED_MODULE_7__componentes_agilidad_aritmetica_agilidad_aritmetica_component__["a" /* AgilidadAritmeticaComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__guards_auth_guard_guard__["a" /* AuthGuardGuard */]] },
            { path: 'Anagrama', component: __WEBPACK_IMPORTED_MODULE_15__componentes_anagrama_anagrama_component__["a" /* AnagramaComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__guards_auth_guard_guard__["a" /* AuthGuardGuard */]] },
            { path: 'Tateti', component: __WEBPACK_IMPORTED_MODULE_16__componentes_tateti_tateti_component__["a" /* TatetiComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__guards_auth_guard_guard__["a" /* AuthGuardGuard */]] },
            { path: 'PiedraPapelTijera', component: __WEBPACK_IMPORTED_MODULE_17__componentes_piedra_papel_tijera_piedra_papel_tijera_component__["a" /* PiedraPapelTijeraComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__guards_auth_guard_guard__["a" /* AuthGuardGuard */]] },
            { path: 'Simon', component: __WEBPACK_IMPORTED_MODULE_20__componentes_simon_simon_component__["a" /* SimonComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__guards_auth_guard_guard__["a" /* AuthGuardGuard */]] },
        ]
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_5__componentes_error_error_component__["a" /* ErrorComponent */] },
    { path: 'error', component: __WEBPACK_IMPORTED_MODULE_5__componentes_error_error_component__["a" /* ErrorComponent */] }
];
var RuteandoModule = (function () {
    function RuteandoModule() {
    }
    return RuteandoModule;
}());
RuteandoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(MiRuteo)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
        ]
    })
], RuteandoModule);

//# sourceMappingURL=ruteando.module.js.map

/***/ }),

/***/ "../../../../../src/app/servicios/archivos-jugadores.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArchivosJugadoresService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__myhttp_service__ = __webpack_require__("../../../../../src/app/servicios/myhttp.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArchivosJugadoresService = (function () {
    function ArchivosJugadoresService(miHttp) {
        this.miHttp = miHttp;
        this.api = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["b" /* apiConfig */].host + 'jugadoresarchivo/apirestjugadores/';
    }
    ArchivosJugadoresService.prototype.traerJugadores = function (ruta) {
        return this.miHttp.httpGetO(this.api + ruta)
            .toPromise()
            .then(function (data) {
            console.log('Archivo jugadores');
            // console.log( data );
            return data;
        }, function (err) {
            console.log(err);
        });
    };
    return ArchivosJugadoresService;
}());
ArchivosJugadoresService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__myhttp_service__["a" /* MyhttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__myhttp_service__["a" /* MyhttpService */]) === "function" && _a || Object])
], ArchivosJugadoresService);

var _a;
//# sourceMappingURL=archivos-jugadores.service.js.map

/***/ }),

/***/ "../../../../../src/app/servicios/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__myhttp_service__ = __webpack_require__("../../../../../src/app/servicios/myhttp.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    function AuthService(router, miHttp) {
        this.router = router;
        this.miHttp = miHttp;
        this.jwtHelper = new __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__["JwtHelper"]();
        this._token = localStorage.getItem('token');
    }
    AuthService.prototype.login = function (email, password) {
        var payload = { 'email': email, 'clave': password };
        return this.miHttp.httpPostP(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["b" /* apiConfig */].host + 'login/', payload);
    };
    AuthService.prototype.saveToken = function (token) {
        this._token = token;
        localStorage.setItem('token', this._token);
    };
    AuthService.prototype.isLogued = function () {
        try {
            return Object(__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__["tokenNotExpired"])() || false;
        }
        catch (error) {
            return false;
        }
    };
    AuthService.prototype.getTokenRaw = function () {
        return this._token;
    };
    AuthService.prototype.getToken = function () {
        try {
            // console.log('getToken', this.jwtHelper.decodeToken(this._token));
            return this.jwtHelper.decodeToken(this._token);
        }
        catch (error) {
            return undefined;
        }
    };
    AuthService.prototype.getExpirationDate = function () {
        try {
            //console.log('getExpirationDate', this.jwtHelper.getTokenExpirationDate(this._token));
            return this.jwtHelper.getTokenExpirationDate(this._token);
        }
        catch (error) {
            return null;
        }
    };
    AuthService.prototype.logOut = function () {
        try {
            localStorage.removeItem('token');
            this.router.navigate(['/login']);
        }
        catch (error) {
            return false;
        }
    };
    AuthService.prototype.getPayloadData = function () {
        if (this.isLogued()) {
            return this.jwtHelper.decodeToken(this._token).data;
        }
        return {};
    };
    AuthService.prototype.getNombre = function () {
        var nombre = '';
        if (this.isLogued()) {
            var data = this.getPayloadData();
            nombre = data.nombre;
        }
        return nombre;
    };
    AuthService.prototype.getEmail = function () {
        var data = this.getPayloadData();
        return data.email;
    };
    AuthService.prototype.getId = function () {
        var data = this.getPayloadData();
        return data.id;
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__myhttp_service__["a" /* MyhttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__myhttp_service__["a" /* MyhttpService */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/servicios/juego-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuegoServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__ = __webpack_require__("../../../../../src/app/clases/juego-adivina.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__myhttp_service__ = __webpack_require__("../../../../../src/app/servicios/myhttp.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JuegoServiceService = (function () {
    function JuegoServiceService(miHttp) {
        this.miHttp = miHttp;
        this.peticion = this.miHttp.httpGetO("http://localhost:3003");
        //    this.peticion = this.miHttp.httpGetO("https://restcountries.eu/rest/v2/all");
    }
    JuegoServiceService.prototype.listar = function () {
        this.miHttp.httpGetP("https://restcountries.eu/rest/v2/all")
            .then(function (data) {
            console.log(data);
        })
            .catch(function (err) {
            console.log(err);
        });
        this.peticion
            .subscribe(function (data) {
            console.log("En listar");
            console.log(data);
        }, function (err) {
            console.info("error: ", err);
        });
        var miArray = new Array();
        miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("Juego 1", false));
        miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("Pepe", true));
        miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("Juego 3", false));
        miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("Juego 4", false));
        miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("Juego 5", false));
        miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("Juego 6", false));
        return miArray;
    };
    JuegoServiceService.prototype.listarPromesa = function () {
        this.peticion
            .subscribe(function (data) {
            console.log("En listarPromesa");
            console.log(data);
        }, function (err) {
            console.log(err);
        });
        var promesa = new Promise(function (resolve, reject) {
            var miArray = new Array();
            miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("JuegoPromesa 1", false, "promesa"));
            miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("PepePromesa", true));
            miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("JuegoPromesa 3", false));
            miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("JuegoPromesa 4", false));
            miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("JuegoPromesa 5", false));
            miArray.push(new __WEBPACK_IMPORTED_MODULE_1__clases_juego_adivina__["a" /* JuegoAdivina */]("JuegoPromesa 6", false));
            resolve(miArray);
        });
        return promesa;
    };
    return JuegoServiceService;
}());
JuegoServiceService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__myhttp_service__["a" /* MyhttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__myhttp_service__["a" /* MyhttpService */]) === "function" && _a || Object])
], JuegoServiceService);

var _a;
//# sourceMappingURL=juego-service.service.js.map

/***/ }),

/***/ "../../../../../src/app/servicios/jugadores.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JugadoresService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__archivos_jugadores_service__ = __webpack_require__("../../../../../src/app/servicios/archivos-jugadores.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JugadoresService = (function () {
    //peticion:any;
    function JugadoresService(miHttp) {
        this.miHttp = miHttp;
        // this.peticion = this.miHttp.traerJugadores();
        //    this.peticion = this.miHttp.httpGetO('https://restcountries.eu/rest/v2/all');
    }
    JugadoresService.prototype.traertodos = function (ruta, filtro) {
        var _this = this;
        return this.miHttp.traerJugadores(ruta).then(function (data) {
            console.info('jugadores service', data);
            _this.filtrado = data;
            var ganador = (filtro === 'ganadores');
            _this.filtrado = _this.filtrado.filter(function (data) { return data.gano === ganador || filtro === 'todos'; });
            return _this.filtrado;
        }).catch(function (errror) {
            console.log('error');
            return _this.filtrado;
        });
    };
    return JugadoresService;
}());
JugadoresService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__archivos_jugadores_service__["a" /* ArchivosJugadoresService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__archivos_jugadores_service__["a" /* ArchivosJugadoresService */]) === "function" && _a || Object])
], JugadoresService);

var _a;
//# sourceMappingURL=jugadores.service.js.map

/***/ }),

/***/ "../../../../../src/app/servicios/myhttp.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyhttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("../../../../rxjs/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyhttpService = (function () {
    function MyhttpService(http) {
        this.http = http;
    }
    MyhttpService.prototype.crearHeaders = function () {
        return new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-type': 'application/json' });
    };
    MyhttpService.prototype.crearTokenHeaders = function (token) {
        return new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-type': 'application/json', 'Authorization': 'Bearer ' + token });
    };
    MyhttpService.prototype.httpGetP = function (url) {
        var headers = this.crearHeaders();
        return this.http
            .get(url, { headers: headers })
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    MyhttpService.prototype.httpGetO = function (url) {
        var headers = this.crearHeaders();
        return this.http
            .get(url, { headers: headers })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["catchError"])(this.handleError('Error al obtener los objetos')));
    };
    MyhttpService.prototype.httpGetAutorized = function (url, token) {
        var headers = this.crearTokenHeaders(token);
        return this.http
            .get(url, { headers: headers })
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    MyhttpService.prototype.httpPostP = function (url, objeto) {
        var headers = this.crearHeaders();
        return this.http
            .post(url, objeto, { headers: headers })
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    MyhttpService.prototype.httpPostAutorized = function (url, objeto, token) {
        var headers = this.crearTokenHeaders(token);
        return this.http
            .post(url, objeto, { headers: headers })
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    MyhttpService.prototype.extractData = function (res) {
        return res;
        //return res.json() || {};
    };
    MyhttpService.prototype.handleError = function (error) {
        return error;
    };
    return MyhttpService;
}());
MyhttpService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], MyhttpService);

var _a;
//# sourceMappingURL=myhttp.service.js.map

/***/ }),

/***/ "../../../../../src/app/servicios/paises.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaisesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__myhttp_service__ = __webpack_require__("../../../../../src/app/servicios/myhttp.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaisesService = (function () {
    function PaisesService(miHttp) {
        this.miHttp = miHttp;
    }
    PaisesService.prototype.listar = function () {
        return this.miHttp.httpGetP('https://restcountries.eu/rest/v2/all')
            .then(function (data) {
            console.log(data);
            return data;
        })
            .catch(function (err) {
            console.log(err);
            return null;
        });
    };
    return PaisesService;
}());
PaisesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__myhttp_service__["a" /* MyhttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__myhttp_service__["a" /* MyhttpService */]) === "function" && _a || Object])
], PaisesService);

var _a;
//# sourceMappingURL=paises.service.js.map

/***/ }),

/***/ "../../../../../src/app/servicios/resultados.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultadosService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__myhttp_service__ = __webpack_require__("../../../../../src/app/servicios/myhttp.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("../../../../../src/app/servicios/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResultadosService = (function () {
    function ResultadosService(miHttp, auth) {
        this.miHttp = miHttp;
        this.auth = auth;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["b" /* apiConfig */].host + 'resultados/';
    }
    ResultadosService.prototype.listar = function () {
        var token = this.auth.getTokenRaw();
        return this.miHttp.httpGetAutorized(this.apiUrl, token);
    };
    ResultadosService.prototype.cargar = function (juego) {
        var data = { gano: juego.gano, juego: juego.nombre };
        var token = this.auth.getTokenRaw();
        return this.miHttp.httpPostAutorized(this.apiUrl, data, token);
    };
    return ResultadosService;
}());
ResultadosService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__myhttp_service__["a" /* MyhttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__myhttp_service__["a" /* MyhttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], ResultadosService);

var _a, _b;
//# sourceMappingURL=resultados.service.js.map

/***/ }),

/***/ "../../../../../src/app/servicios/usuarios.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuariosService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__myhttp_service__ = __webpack_require__("../../../../../src/app/servicios/myhttp.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsuariosService = (function () {
    function UsuariosService(miHttp) {
        this.miHttp = miHttp;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["b" /* apiConfig */].host + 'usuarios/';
    }
    UsuariosService.prototype.listar = function () {
        return this.miHttp.httpGetP(this.apiUrl);
    };
    UsuariosService.prototype.crear = function (nombre, email, password) {
        var payload = { 'nombre': nombre, 'email': email, 'clave': password };
        return this.miHttp.httpPostP(this.apiUrl, payload)
            .then(function (data) { return data; })
            .catch(function (err) { console.log(err); return null; });
    };
    return UsuariosService;
}());
UsuariosService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__myhttp_service__["a" /* MyhttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__myhttp_service__["a" /* MyhttpService */]) === "function" && _a || Object])
], UsuariosService);

var _a;
//# sourceMappingURL=usuarios.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return agilidadConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return apiConfig; });
/* unused harmony export fakeToken */
/* unused harmony export fakeTokenData */
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
var agilidadConfig = {
    min: 1,
    max: 5
};
var apiConfig = {
    //host: 'http://apisala.avillucas.com.ar/'
    host: 'http://localhost:8080/'
};
// tslint:disable-next-line:max-line-length
var fakeToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWRtaW4gQWRtaW4iLCJlbWFpbCI6ImFkbWluQHNhbGEuY29tIiwiaWQiOjEsImlhdCI6MTUxNjIzOTAyMn0.5zO6BKPJiqNGCkFfJxza32gQjkDZBeKmwtLgMU47cq0';
var fakeTokenData = {
    'name': 'Carlos Admin',
    'email': 'admin@sala.com',
    'id': 1,
    'iat': 1516239022
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["c" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map