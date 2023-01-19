import { CursoResolver } from './guard/curso.resolver';
import { FormularioCursosComponent } from './container/formulario-cursos/formulario-cursos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CursosComponent } from '../cursos/container/cursos/cursos.component';

const routes: Routes = [
  {path: '', component: CursosComponent},
  {path: 'new', component: FormularioCursosComponent, resolve: {curso: CursoResolver}},
  {path: 'edit/:id', component: FormularioCursosComponent, resolve: {curso: CursoResolver}} // Rota + quem vai resolver
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
