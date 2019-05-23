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

  set CargarRespuestaIngresada(respuestaIngresada: string) {
    this.respuestaIngresada = Number(respuestaIngresada);
  }

  set PrimerNumero(primerNumero: number) {
    this.primerNumero = primerNumero;
  }

  set SegundoNumero(segundoNumero: number) {
    this.segundoNumero = segundoNumero;
  }

  get PrimerNumero():number{
    return this.primerNumero;
  }

  get Operador():Operador{
    return this.operador;
  }
  
  get SegundoNumero():number{
    return this.segundoNumero;
  }

  get Respuesta(){
    return this.respuesta;
  }

  get RespuestaIngresada() :number{
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

  public Jugar(){
    this.generarOperacion();
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
  }
  public reiniciar() {
    this.resetear();

  }
  public finalizar() {
    this.resetear();
  }

  private resetear() {
    this.primerNumero = null;
    this.segundoNumero = null;
    this.operador = Operador.Suma;
    this.gano = null;
  }

  public verificar(): boolean {        
    this.gano =  (this.respuestaIngresada == this.respuesta) ;
    return (this.gano);
  }
}
