import { Juego } from './juego';
import { Colores } from '../enums/colores.enum';

export class JuegoSimon extends Juego {


  private colores: Array<Colores>;
  private secuencia: Array<Colores>;
  private secuenciaAMostrar: Array<Colores>;
  private secuenciaRequeridaJugador: Array<Colores>;
  private demora: number;
  private paso: number;
  private cantidadSecuenciasParaGanar: number;
  private ultimoColorUsuario: Colores;
  private juegoTerminado: boolean;
  private cantidadSecuenciasJugadas: number;
  private tiempoApagado: number;

  set ColorIngresado(color: Colores) {
    this.ultimoColorUsuario = color;
  }

  get SecuenciaCorrecta(): string {
    return this.secuencia.reduce(
      (valorAnterior: string, valorActual: Colores) => {
        return valorAnterior + ', ' + Colores[valorActual];
      }, ''
    );
  }

  get CantidadSecuenciasParaGanar(): number {
    return this.cantidadSecuenciasParaGanar;
  }

  get JuegoTerminado(): boolean {
    return this.juegoTerminado;
  }

  get TiempoApagado(): number {
    return this.tiempoApagado;
  }

  get LeTocaALaMaquina(): boolean {
    return this.secuenciaRequeridaJugador.length === 0;
  }

  get Secuencia(): Array<Colores> {
    return this.secuencia;
  }

  get SecuenciaMostrada(): boolean {
    return this.secuenciaAMostrar.length === 0;
  }

  get SiguienteColorAMostrar(): Colores {
    return this.secuenciaAMostrar.shift();
  }

  get Demora(): number {
    return this.demora;
  }

  get SecuenciaJugador(): Array<Colores> {
    return this.secuenciaRequeridaJugador;
  }

  Jugar(): Colores {
    const color = this.traerColorAlAzar();
    this.secuencia.push(color);
    this.secuenciaRequeridaJugador = Object.assign(new Array<Colores>(), this.secuencia);
    this.secuenciaAMostrar = Object.assign(new Array<Colores>(), this.secuencia);
    return color;
  }


  // sacar uno al azar de los 5 REPETICIONES veces en orden , guardar el orden y ver que se cumpla lo mismo
  constructor(nombre?: string, gano?: boolean, jugador?: string) {
    super('Simon', gano, jugador);
    // 5 colores
    this.colores = [Colores.Amarillo, Colores.Azul, Colores.Rojo, Colores.Verde];
    this.paso = 600;
    this.tiempoApagado = 50;
    this.cantidadSecuenciasParaGanar = 3;
    this.resetear();
  }

  private traerColorAlAzar(): Colores {
    const largo = this.colores.length;
    const indice = Math.floor(Math.random() * largo);
    return this.colores[indice];
  }

  public iniciar() {
    this.resetear();
    //
  }
  public reiniciar() {
    this.resetear();

  }
  public finalizar() {
    this.resetear();
  }

  private resetear() {
    this.secuencia = new Array<Colores>();
    this.secuenciaAMostrar = new Array<Colores>();
    this.secuenciaRequeridaJugador = new Array<Colores>();
    this.demora = this.paso;
    this.juegoTerminado = false;
    this.cantidadSecuenciasJugadas = 0;
  }

  private aumentarVelocidad() {
    this.demora -= this.paso;
  }

  // TODO implementar para subir de nivel
  private subirNivel() {
    this.aumentarVelocidad();
  }

  public verificar(): boolean {
    // Si el color que esta ingresando el usuario es el que viene en la secuencia
    const colorValido = this.secuenciaRequeridaJugador.shift();
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
  }

}
