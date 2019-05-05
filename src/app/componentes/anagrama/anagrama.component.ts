import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { JuegoAnagrama } from '../../clases/juego-anagrama';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit {

  @Output() enviarJuego: EventEmitter<any> = new EventEmitter<any>();
  nuevoJuego: JuegoAnagrama;
  Mensajes: string;
  contador: number;
  palabraDesordenada: string;

  constructor(private builder: FormBuilder) {
    console.info('Anagrama iniciando');
    this.nuevoJuego = new JuegoAnagrama();
  }

  palabraOrdenadaControl = new FormControl('', [
    Validators.required,
    Validators.minLength(1),
    Validators.maxLength(30)
  ]);

  anagramaForm: FormGroup = this.builder.group({
    palabraOrdenada: this.palabraOrdenadaControl
  });

  Verificar() {
    console.info('verificando');
    this.nuevoJuego.PalabraIngresada = this.anagramaForm.get('palabraOrdenada').value;
    if (this.nuevoJuego.verificar()) {
      this.enviarJuego.emit(this.nuevoJuego);
      // this.MostarMensaje('Sos un Genio!!!', true);
      this.reiniciar();
      console.info('Gano');
    } else {
      console.info('Perdio');
      // this.MostarMensaje('#' + this.contador + ' ' + mensaje + ' ayuda :' + this.nuevoJuego.retornarAyuda());
    }
  }

  private reiniciar() {
    this.nuevoJuego.reiniciar();
    this.palabraDesordenada = this.nuevoJuego.PalabraDesordenada;
  }
  ngOnInit() {
    this.nuevoJuego.iniciar();
    this.palabraDesordenada = this.nuevoJuego.PalabraDesordenada;
  }

}
