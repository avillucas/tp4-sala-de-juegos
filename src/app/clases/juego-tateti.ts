import { Juego } from './juego';
import { Casillero } from '../enums/casilleros.enum';

export class JuegoTateti extends Juego {

  private disponibles: Array<Casillero>;
  private casillerosJugador: Array<Casillero>;
  private casillerosMaquina: Array<Casillero>;
  private terminado: boolean;

  constructor(nombre?: string, gano?: boolean, jugador?: string) {
    super('Tateti', gano, jugador);
    this.iniciar();
  }

  public EstaTomado(casillero: Casillero): boolean {
    return (this.disponibles.indexOf(casillero) === -1);
  }

  public MaquinaJugar() {
    // un numero al azar para elegir entre los disponibles
    const casilleroSeleccionado = this.traerCasilleroDisponibleAlAzar();
    // Jugar ese casillero
    this.Jugar(casilleroSeleccionado);
    //guardar el casillero
    this.casillerosMaquina.push(casilleroSeleccionado);
    // retorna el casillero de la maquina
    return casilleroSeleccionado;
  }

  public JugadorTomarCasilleroDisponiblePorIndice(indiceCasillerDisponible: number): Casillero {
    const casilleroSeleccionado = this.disponibles[indiceCasillerDisponible];
    this.JugadorTomarCasillero(casilleroSeleccionado);
    return casilleroSeleccionado;
  }

  public JugadorTomarCasillero(casilleroSeleccionado: Casillero): Casillero {
    // Jugar ese casillero
    this.Jugar(casilleroSeleccionado);
    // guardar el casillero
    this.casillerosJugador.push(casilleroSeleccionado);
    //
    return casilleroSeleccionado;
  }

  private Jugar(casilleroSeleccionado: Casillero) {
    this.tomarCasillero(casilleroSeleccionado);
  }

  private traerCasilleroDisponibleAlAzar(): Casillero {
    const largo = this.disponibles.length;
    const indice = Math.floor(Math.random() * largo);
    return this.disponibles[indice];
  }

  public tomarCasillero(casilleroTomado: Casillero) {
    if (this.disponibles.indexOf(casilleroTomado) === -1) {
      // todo averiguar como lanzar una excepcion correctamente
      console.error('Logro seleccionar un casillero (' + casilleroTomado.toString() + ') que habia sido tomado anteriormente');
      return false;
    }
    this.disponibles = this.disponibles.filter(casillero => casillero !== casilleroTomado);
  }

  public iniciar() {
    this.resetear();
    //
  }
  public reiniciar() {
    this.resetear();
    //
  }
  public finalizar() {
    this.resetear();
  }

  private resetear() {
    this.disponibles = [Casillero.A1, Casillero.B1, Casillero.C1, Casillero.A2, Casillero.B2,
    Casillero.C2, Casillero.A3, Casillero.B3, Casillero.C3];
    this.casillerosJugador = [];
    this.casillerosMaquina = [];
    this.terminado = false;
  }

  public QuedanMovidas(): boolean {
    return (!this.terminado && this.disponibles.length > 0);
  }

  private verificarSiTomoTresCasilleros(casillero1, casillero2, casillero3): boolean {
    if (
      this.casillerosJugador.indexOf(casillero1) !== -1
      && this.casillerosJugador.indexOf(casillero2) !== -1
      && this.casillerosJugador.indexOf(casillero3) !== -1
    ) {
      return true;
    }
    return false;
  }

  private verificarSiTomoTresCasillerosMaquina(casillero1, casillero2, casillero3): boolean {
    if (
      this.casillerosMaquina.indexOf(casillero1) !== -1
      && this.casillerosMaquina.indexOf(casillero2) !== -1
      && this.casillerosMaquina.indexOf(casillero3) !== -1
    ) {
      return true;
    }
    return false;
  }

  public verificar() {
    if (
      // Revisar si tiene la primera linea en horizontal
      (this.verificarSiTomoTresCasilleros(1, 2, 3))
      // Revisar si tiene la segunda linea en horizontal
      || (this.verificarSiTomoTresCasilleros(4, 5, 6))
      // Revisar si tiene la tercera linea en horizontal
      || (this.verificarSiTomoTresCasilleros(7, 8, 9))
      // Revisar si tiene la primera vertical
      || (this.verificarSiTomoTresCasilleros(1, 4, 7))
      // Revisar si tiene la segunda vertical
      || (this.verificarSiTomoTresCasilleros(2, 5, 8))
      // Revisar si tiene la tercera vertical
      || (this.verificarSiTomoTresCasilleros(3, 6, 9))
      // Revisar si tiene la primer diagonal
      || (this.verificarSiTomoTresCasilleros(1, 5, 9))
      // Revisar si tiene la segunda diagonal
      || (this.verificarSiTomoTresCasilleros(3, 5, 7))

    ) {
      this.gano = true;
      this.terminado = true;
    }
    if (
      // Revisar si tiene la primera linea en horizontal
      (this.verificarSiTomoTresCasillerosMaquina(1, 2, 3))
      // Revisar si tiene la segunda linea en horizontal
      || (this.verificarSiTomoTresCasillerosMaquina(4, 5, 6))
      // Revisar si tiene la tercera linea en horizontal
      || (this.verificarSiTomoTresCasillerosMaquina(7, 8, 9))
      // Revisar si tiene la primera vertical
      || (this.verificarSiTomoTresCasillerosMaquina(1, 4, 7))
      // Revisar si tiene la segunda vertical
      || (this.verificarSiTomoTresCasillerosMaquina(2, 5, 8))
      // Revisar si tiene la tercera vertical
      || (this.verificarSiTomoTresCasillerosMaquina(3, 6, 9))
      // Revisar si tiene la primer diagonal
      || (this.verificarSiTomoTresCasillerosMaquina(1, 5, 9))
      // Revisar si tiene la segunda diagonal
      || (this.verificarSiTomoTresCasillerosMaquina(3, 5, 7))
    ) {
      this.gano = false;
      this.terminado = true;
    }
    return (this.gano);
  }
}
