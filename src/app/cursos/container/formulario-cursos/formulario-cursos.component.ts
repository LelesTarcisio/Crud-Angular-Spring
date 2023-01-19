import { Curso } from './../../model/curso';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { CursoService } from '../../service/curso.service';

@Component({
  selector: 'app-formulario-cursos',
  templateUrl: './formulario-cursos.component.html',
  styleUrls: ['./formulario-cursos.component.scss']
})
export class FormularioCursosComponent implements OnInit {

  form = this.formBuilder.group({
    _id: [''],
    nome: [''],
    categoria: ['']
  });

  constructor(private formBuilder: NonNullableFormBuilder,  // Tem toda a lógica que irá ajudar no Form Group // inclusive nao aceitando nulo
    private service: CursoService, //Injetando o serviço no construtor
    private _snackBar: MatSnackBar,
    private location: Location,  // Import que facilita a navegação entre as páginas, como por exemplo clicar em cancelar e redirecionar para pagina principal
    private route: ActivatedRoute) { // Obter as informações da rota, rotas ativas
  }

  ngOnInit(): void { //Snapshot: pegar a cópia da rota
    const curso: Curso = this.route.snapshot.data['curso']; // Buscando os valores dentro de nome e categoria
    this.form.setValue({
      _id: curso._id,
      nome: curso.nome,
      categoria: curso.categoria
    })
  }

  onSubmit() {
    // Para toodo observable temos que nos inscrever;
    this.service.save(this.form.value)
      .subscribe(result => this.onSucsses(), error => this.onError())
  }

  onCancel() {
    this.location.back();
  }

  onSucsses() {
    this._snackBar.open('Curso salvo com sucesso!', 'Fechar', { duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'center' }),
      this.onCancel(); // Neste caso estou aproveitando a função do onCancel
  }

  onError() {
    this._snackBar.open('Erro ao tentar salvar curso.', 'Fechar', { duration: 3000 }); // Msg de erro do Material
  }
}


