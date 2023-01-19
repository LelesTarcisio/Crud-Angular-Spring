import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, tap } from 'rxjs/operators';

import { Curso } from '../model/curso';


@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private readonly API = 'api/cursos'; // Pegando o json da api criada no

  // Injeção de dependencia // Obter a informação do servidor, e iremos fazer uma chamado ajax (chamada para um servidor).

  constructor(private HttpClient: HttpClient) { }

  lista() {
    return this.HttpClient.get<Curso[]>(this.API) // Um observable que retorna um Array exclusivo de Cursos (por conta do Generics)
      .pipe( // Manipulação da informação json de uma maneira reativa, ou seja, da maneira que for necessária
        delay(1000), // Tempo para carregar a tabela
        tap(cursos => console.log(cursos))
      );
  }

  loadById(id: string){
    return this.HttpClient.get<Curso>(`${this.API}/${id}`); // api/cursos/o curso a ser editado
  }

  save(curso: Partial <Curso>){
    if(curso._id){
      return this.atualizacaoEditar(curso); // Se for uma atualização, a gente retorna a criação do registro
    }
    return this.criarCurso(curso)
  }

  private criarCurso(curso: Partial <Curso>){ //Responsabilidade de enviar para o back-end ou para onde irá enviar será do service
    return this.HttpClient.post<Curso>(this.API, curso); //Enviando via http POST o curso para meu back-end, como segundo parametro passamos os dados que está dentro da variavel curso
  }


  private atualizacaoEditar (curso: Partial<Curso>){
    return this.HttpClient.put<Curso>(`${this.API}/${curso._id}`, curso);
  }

  removerCurso (id: string){
    return this.HttpClient.delete(`${this.API}/${id}`);
  }

}


