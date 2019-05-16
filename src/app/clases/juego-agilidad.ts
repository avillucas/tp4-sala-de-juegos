import { Juego } from './juego';
import { Operador } from '../enums/operadores.enum';
import { agilidadConfig } from '../../environments/environment';

export class JuegoAgilidad extends Juego {

  private operador: Operador;
  private primerNumero: number;
  private segundoNumero: number;
  private respuesta: number;
  private respuestaIngresada: number;

  constructor(nombre?: string, gano?: boolean, jugador?: string) {
    super('Agilidad Aritmetica', gano, jugador);
  }

  set RespuestaIngresada(respuestaIngresada: number) {
    this.respuestaIngresada = respuestaIngresada;
  }

  set PrimerNumero(primerNumero: number) {
    this.primerNumero = primerNumero;
  }

  set SegundoNumero(segundoNumero: number) {
    this.segundoNumero = segundoNumero;
  }

  get Respuesta(){
    return this.respuesta;
  }

  get RespuestaIngresada(){
    return this.respuestaIngresada;
  }

  private calcularRespuesta() {
    let respuesta = 0;
    switch (this.operador) {
      case Operador.Suma:
        respuesta = this.primerNumero + this.segundoNumero;
        break;
      case Operador.Resta:
        respuesta = this.primerNumero - this.segundoNumero;
        break;
      case Operador.Division:
        respuesta = this.primerNumero / this.segundoNumero;
        break;
      case Operador.Multiplicacion:
        respuesta = this.primerNumero * this.segundoNumero;
        break;
    }    
    this.respuesta = Math.floor(respuesta);    
  }

  private randomLength(length: number): number {
    return Math.floor(Math.random() * length);
  }

  private traerOperadorAlAzar() {
    const ind = this.randomLength(3);
    switch (ind-1) {
      case 1:
        this.operador = Operador.Resta;
        break;
      case 2:
        this.operador = Operador.Division;
        break;
      case 3:
        this.operador = Operador.Multiplicacion;
        break;
      default:
        this.operador = Operador.Suma;
        break;      
    }    
  }

  private randomInt(min, max) :number{
    return Math.floor(Math.random() * (max - (min + 1)) + (min + 1));
  }

  private traerNumeroAlAzar() :number{
    return this.randomInt(agilidadConfig.min, agilidadConfig.max);
  }

  private generarOperacion() {
    this.primerNumero = this.traerNumeroAlAzar();
    this.segundoNumero = this.traerNumeroAlAzar();
    this.traerOperadorAlAzar();
    this.calcularRespuesta();
    console.log('p:',this.primerNumero, 'op',this.operador, 's:',this.segundoNumero,'r:',this.respuesta);
  }

  public iniciar() {
    this.resetear();
    this.generarOperacion();
  }
  public reiniciar() {
    this.resetear();

  }
  public finalizar() {
    this.resetear();
  }

  private resetear() {
    this.primerNumero = 0;
    this.segundoNumero = 0;
    this.operador = Operador.Suma;
  }

  public verificar(): boolean {    
    console.info(this.respuestaIngresada ,  this.respuesta);
    if (this.respuestaIngresada == this.respuesta) {
      this.gano = true;
    }
    return (this.gano);
  }
}
