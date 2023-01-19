import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ImportsMaterialModule } from './../shared/imports-material/imports-material.module';
import { SharedModule } from './../shared/shared.module';
import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from '../cursos/container/cursos/cursos.component';
import { FormularioCursosComponent } from './container/formulario-cursos/formulario-cursos.component';
import { ListaCursosComponent } from '../cursos/components/lista-cursos/lista-cursos.component';

@NgModule({
  declarations: [
    CursosComponent,
    FormularioCursosComponent,
    ListaCursosComponent,
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    ImportsMaterialModule,
    SharedModule,
    ReactiveFormsModule // Fornecedor do form bilder e former group
  ]
})
export class CursosModule { }
