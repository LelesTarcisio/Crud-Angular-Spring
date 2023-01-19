import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MsgErrorComponent } from './components/msg-error/msg-error.component';
import { ImportsMaterialModule } from './imports-material/imports-material.module';
import { PipeCategoriaPipe } from './pipes/pipe-categoria.pipe';
import { DialogConfirmacaoComponent } from './components/dialog-confirmacao/dialog-confirmacao.component';



@NgModule({
  declarations: [
    MsgErrorComponent,
    PipeCategoriaPipe,
    DialogConfirmacaoComponent
  ],
  imports: [
    ImportsMaterialModule,
    CommonModule
  ],
  exports: [
    MsgErrorComponent,
    DialogConfirmacaoComponent,
    PipeCategoriaPipe

  ]
})
export class SharedModule { }
