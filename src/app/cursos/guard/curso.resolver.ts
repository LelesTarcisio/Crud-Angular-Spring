import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Curso } from './../model/curso';
import { CursoService } from './../service/curso.service';

@Injectable({
  providedIn: 'root'

// Vou obter informações das rotas

})
export class CursoResolver implements Resolve<Curso> {

  constructor(private service: CursoService){};

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Curso> {
    if(route.params && route.params['id']){ // Se existe parametros e existe esse parametro id...
      return this.service.loadById(route.params['id']); // irá obter o id do parâmetro
    }
    return of({_id:'', nome:'', categoria:''}); // a rota new não passará pelo if, e por isso devemos retornar os objetos com identificadores vazio
  }
}
