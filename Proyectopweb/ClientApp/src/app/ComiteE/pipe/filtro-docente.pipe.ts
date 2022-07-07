import { Pipe, PipeTransform } from '@angular/core';
import { Docente } from '../models/docente';

@Pipe({
  name: 'filtroDocente'
})
export class FiltroDocentePipe implements PipeTransform {

  transform(docente: Docente[], searchText: string): any {
    if (searchText == null) return docente;
    return docente.filter(p =>
      p.identificacion.toLowerCase()
     .indexOf(searchText.toLowerCase()) !== -1);
    
    }

}
