import { DialogConfirmacaoComponent } from './../../../shared/components/dialog-confirmacao/dialog-confirmacao.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MsgErrorComponent } from 'src/app/shared/components/msg-error/msg-error.component';

import { Curso } from '../../model/curso';
import { CursoService } from '../../service/curso.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos$: Observable<Curso[]> | null = null; // Fazendo outro observable. O uso do $ indica que isso é um, observable. // A variável pode ser do tipo observable ou pode ser nula

  constructor(
    private cursoService: CursoService,
    public dialog: MatDialog, // Material/Dialog/Injection
    private router: Router, // Controle do rotiamento do Angular
    private route: ActivatedRoute, // pegar parametros da rota atual e colocar no relativeTo // Pensamento a longo prazo, caso for trocar a rota nao ter que trocar em vários lugares
    private _snackBar: MatSnackBar
  ) {
    this.refresh();
  }

  refresh() {
    this.cursos$ = this.cursoService.lista() // Utilização do serviço
      .pipe(
        catchError(error => { //Realizando o tratamento de erros, caso não encontre a rota das tabelas
          this.umErro('Ocorreu um erro ao carregar cursos.')
          return of([])
        })
      );
  }

  //MSG DE ERRO
  // Material/Dialog/Injection
  umErro(errorMsg: string) {
    this.dialog.open(MsgErrorComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void { }

  // Adicionar curso
  adicionarCurso() {
    this.router.navigate(['new'], { relativeTo: this.route }); // Fazendo o redirecionamento para a página new a partir do clique // relativeTo: pegando a rota que estou /cursos e agregando ao new // COMPONENTE INTELIGENTE
  }

  //Editar curso
  editarCurso(curso: Curso) {
    this.router.navigate(['edit', curso._id], { relativeTo: this.route });
  }

  //Remover curso
  removerCurso(curso: Curso) {
    const dialogRef = this.dialog.open(DialogConfirmacaoComponent, {
      data: 'Tem certeza que deseja remover o curso?',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if(result){
        this.cursoService.removerCurso(curso._id).subscribe(
          () => {
            this._snackBar.open('Curso removido com sucesso!', 'Fechar', {
              duration: 3000,
              verticalPosition: 'top',
              horizontalPosition: 'center'
            });
            this.refresh(); // Atualizar a tela sem o curso
          },
          error => this.umErro('Erro ao tentar remover o curso.')
        );
      }
    });
  }
}





