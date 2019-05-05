import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { JuegoAnagrama } from '../../clases/juego-anagrama';
import { Validators, FormBuilder, FormControl, FormGroup } from "@angular/forms";

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

  constructor(private builder: FormBuilder) {
    this.nuevoJuego = new JuegoAnagrama();
  }

  palabraOrdenada = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
    Validators.maxLength(255)
  ]);

  anagramaForm: FormGroup = this.builder.group({
    palabraOrdenada: this.palabraOrdenada
  });

  Verificar() {
    this.nuevoJuego.PalabraIngresada = this.anagramaForm.get('palabraOrdenada').value;
    if (this.nuevoJuego.verificar()) {
      this.enviarJuego.emit(this.nuevoJuego);
      //this.MostarMensaje('Sos un Genio!!!', true);
      this.nuevoJuego.finalizado();
      console.info('Gano');
    } else {
      console.info('Perdio');
      // this.MostarMensaje('#' + this.contador + ' ' + mensaje + ' ayuda :' + this.nuevoJuego.retornarAyuda());
    }
  }

  ngOnInit() {
  }

}
