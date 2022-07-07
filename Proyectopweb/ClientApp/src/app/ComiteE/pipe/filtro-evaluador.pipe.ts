import { Pipe, PipeTransform } from '@angular/core';
import { Evaluador } from '../models/evaluador';

@Pipe({
  name: 'filtroEvaluador'
})
export class FiltroEvaluadorPipe implements PipeTransform {

  transform(evaluador: Evaluador[], searchText: string): any {
    if (searchText == null) return evaluador;
    return evaluador.filter(p =>
      p.identificacion.toLowerCase()
     .indexOf(searchText.toLowerCase()) !== -1);
    
    }
}
