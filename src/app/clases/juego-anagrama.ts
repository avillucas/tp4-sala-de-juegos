import { Juego } from './juego';

export class JuegoAnagrama extends Juego {

  private palabras = ['casa', 'cocina', 'topo', 'armando'];
  private palabraDesordenada: string;
  private palabraOrdenada: string;
  private palabraIngresada: string;

  private desordenarPalabra(palabraOrdenada: string): string {
    if (!palabraOrdenada) {
      return '';
    }
    return palabraOrdenada.split('').sort(this.randomize).join('');
  }

  private randomize(a, b) {
    return Math.random() > .5 ? -1 : 1;
  }

  private traerPalabraAlAzar(): string {
    const largo = this.palabras.length;
    const indice = Math.floor(Math.random() * largo);
    return this.palabras[indice];
  }

  public generarPalabraDesordenada() {
    this.palabraOrdenada = this.traerPalabraAlAzar();
    this.palabraDesordenada = this.desordenarPalabra(this.palabraOrdenada);
    console.info('Palabra ordenada:' + this.palabraDesordenada);
    this.gano = false;
  }

  constructor(nombre?: string, gano?: boolean, jugador?: string) {
    super('Anagrama', gano, jugador);
    this.resetear();
  }

  public finalizado()
  {
    this.resetear();
  }

  private resetear() {
    this.palabraDesordenada = '';
    this.palabraIngresada = '';
    this.palabraOrdenada = '';
  }
  set PalabraIngresada(palabraIngresada: string) {
    this.palabraIngresada = palabraIngresada;
  }

  public verificar(): boolean {
    if (this.palabraIngresada === this.palabraOrdenada) {
      this.gano = true;
    }
    return (this.gano);
  }
}
