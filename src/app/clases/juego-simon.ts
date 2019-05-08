import { Juego } from './juego';
import { Colores } from '../enums/colores.enum';

export class JuegoSimon extends Juego {


  private colores: Array<Colores>;
  private secuencia: Array<Colores>;
  private emitiendo: boolean;
  private emitidos: number;
  private cantidadSecuencia: number;


  get Secuencia(): Array<Colores> {
    return this.secuencia;
  }

  public MaquinaEmitir(): Colores {
    if (this.emitidos <= this.cantidadSecuencia) {
      this.emitiendo = true;
      this.emitidos++;
      const color = this.traerColorAlAzar();
      this.secuencia.push(color);
      return color;
    } else {
      this.emitiendo = false;
    }
  }

  // sacar uno al azar de los 5 REPETICIONES veces en orden , guardar el orden y ver que se cumpla lo mismo
  constructor(nombre?: string, gano?: boolean, jugador?: string) {
    super('Simon', gano, jugador);
    // 5 colores
    this.colores = [Colores.Amarillo, Colores.Azul, Colores.Naranja, Colores.Rojo, Colores.Verde];
    this.secuencia = new Array();
    this.cantidadSecuencia = 3;
    this.emitiendo = false;
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
    this.secuencia = new Array();
  }

  public verificar(): boolean {
    //
    return (this.gano);
  }
}
