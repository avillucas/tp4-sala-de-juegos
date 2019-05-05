import { Juego } from './juego';
import { Opcion } from '../enums/opciones.enum';

export class JuegoPiedraPapelTijera extends Juego {

  private opcionDeLaMaquina: Opcion;
  private opcionDelUsuario: Opcion;
  public empate: boolean;

  constructor(nombre?: string, gano?: boolean, jugador?: string) {
    super('Piedra papel o tijera', gano, jugador);
    this.empate = false;
  }

  get OpcionDeLaMaquina(): Opcion {
    return this.opcionDeLaMaquina;
  }

  get esEmpate(): boolean {
    return this.empate;
  }

  get Resultado(): string {
    return Opcion[this.opcionDelUsuario] + ' VS ' + Opcion[this.opcionDeLaMaquina];
  }

  set OpcionDelUsuario(opcion: Opcion) {
    this.opcionDelUsuario = opcion;
  }

  private randomLength(length: number): number {
    return Math.floor(Math.random() * length);
  }

  private definirOpcionMaquina() {
    const ind = this.randomLength(3);
    switch (ind) {
      case 0:
        this.opcionDeLaMaquina = Opcion.Piedra;
        break;
      case 1:
        this.opcionDeLaMaquina = Opcion.Papel;
        break;
      default:
        this.opcionDeLaMaquina = Opcion.Tijera;
        break;
    }
  }

  public verificar() {
    // de ser un empate indicarle que es un empate
    if (this.opcionDeLaMaquina === this.opcionDelUsuario) {
      this.gano = false;
      this.empate = true;
    }
    this.gano = (
      // piedra le gana a tijera
      (this.opcionDelUsuario === Opcion.Piedra && this.opcionDeLaMaquina === Opcion.Tijera)
      // papel le gana a piedra
      || (this.opcionDelUsuario === Opcion.Papel && this.opcionDeLaMaquina === Opcion.Piedra)
      // tijera le gana a papel
      || (this.opcionDelUsuario === Opcion.Tijera && this.opcionDeLaMaquina === Opcion.Papel)
    );
    return this.gano;
  }

  private resetear() {
    this.empate = false;
    this.gano = false;
  }

  public iniciar() {
    this.resetear();
    this.definirOpcionMaquina();
  }
  public reiniciar() {
    this.resetear();
    this.definirOpcionMaquina();
  }

  public finalizar() {
    this.resetear();
  }


}
