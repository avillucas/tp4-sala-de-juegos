import { Juego } from './juego';

export class JuegoAnagrama extends Juego {

  // @todo Analizar como traer el diccionario desde algun enumerado
  // @todo evitar que salga dos veces la misma palabra
  private palabras = ['casa', 'cocina', 'topo', 'armando', 'tijeras', 'herramienta', 'pachanga'];
  private palabraDesordenada: string;
  private palabraOrdenada: string;
  private palabraIngresada: string;

  get PalabraDesordenada(): string {
    return this.palabraDesordenada;
  }

  get PalabraOrdenada(): string {
    return this.palabraOrdenada;
  }

  set PalabraIngresada(palabraIngresada: string) {
    this.palabraIngresada = palabraIngresada;
  }

  private desordenarPalabra(palabraOrdenada: string): string {
    let palabraDesordenada = palabraOrdenada.split('').sort(this.randomize).join('');
    // evitar el caso en el que se repitan
    if (palabraDesordenada === palabraOrdenada) {
      palabraDesordenada = this.desordenarPalabra(palabraDesordenada);
    }
    return palabraDesordenada;
  }

  private randomize(a, b) {
    return Math.random() > .5 ? -1 : 1;
  }

  private traerPalabraAlAzar(): string {
    const largo = this.palabras.length;
    const indice = Math.floor(Math.random() * largo);
    return this.palabras[indice];
  }

  private generarPalabraDesordenada() {
    this.palabraOrdenada = this.traerPalabraAlAzar();
    console.info('Palabra ordenada:' + this.palabraOrdenada);
    this.palabraDesordenada = this.desordenarPalabra(this.palabraOrdenada);
    console.info('Palabra desordenada:' + this.palabraDesordenada);
    this.gano = false;
  }

  constructor(nombre?: string, gano?: boolean, jugador?: string) {
    super('Anagrama', gano, jugador);
  }

  public iniciar() {
    this.resetear();
    this.generarPalabraDesordenada();
  }
  public reiniciar() {
    this.resetear();
    this.generarPalabraDesordenada();
  }
  public finalizar() {
    this.resetear();
  }

  private resetear() {
    this.palabraDesordenada = '';
    this.palabraIngresada = '';
    this.palabraOrdenada = '';
  }

  public verificar(): boolean {
    console.info('Verificacion:', this.palabraIngresada, this.palabraOrdenada);
    if (this.palabraIngresada === this.palabraOrdenada) {
      this.gano = true;
    }
    return (this.gano);
  }
}
