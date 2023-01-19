import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Curso } from '../../model/curso';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.scss']
})

//RESPONSAVEL POR RENDERIZAR APENAS AS LISTAS QUE APARECERÃO AO ADICIONAR CURSO

export class ListaCursosComponent implements OnInit {

  @Input() cursos: Curso[] = [];
  @Output() adicionar = new EventEmitter(false); // adicionando evento de saída
  @Output() editar = new EventEmitter(false);
  @Output() remover = new EventEmitter(false);

  readonly displayedColumns = ['_id', 'nome', 'categoria', 'actions'];

  constructor() {

  }

  ngOnInit(): void {
  }

  // Adicionar curso
  adicionarCurso() {
      this.adicionar.emit(true) // Pegamos a referencia do emissor de eventos e chamar a função emitir ao clicar // COMPONENTE DE APRESENTAÇÃO OU BURRO
  }

  //Editar curso
  editarCurso(curso: Curso) {
    this.editar.emit(curso) // Emitir o curso , e quem for escutar esse evento decide oq quer fazer com essa informação
  }

  removerCurso(curso: Curso){
    this.remover.emit(curso)
  }

}
