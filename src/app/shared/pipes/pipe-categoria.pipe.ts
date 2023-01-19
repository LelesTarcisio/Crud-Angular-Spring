
// Classe pipe: dado um valor eu vou ter uma logica e eu vou retornar esse valor transformado

import { Pipe, PipeTransform } from '@angular/core';
import { pipe } from 'rxjs';

@Pipe({
  name: 'pipeCategoria'
})
export class PipeCategoriaPipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case 'front-end': return 'code'; // ícone
      case 'back-end': return 'computer'; ;// ícone
    }
    return 'code';
  }

}
