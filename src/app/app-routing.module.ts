import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: '', pathMatch: 'full' ,redirectTo: 'cursos' }, // Pathmath: Analisa toda a rota se estiver localhost4200 ou localhost4200/, ou seja, analisa toda rota para ter certeza que não tem nada

  {
    path: 'cursos',
    loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule)   // lazy loading: além de torná-la mais organizada e escalável. Trata-se de um padrão onde o carregamento de módulos ocorre sob demanda, ou seja, apenas quando solicitado e não necessariamente no primeiro acesso.

  }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
