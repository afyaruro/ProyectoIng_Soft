import { Pipe, PipeTransform } from '@angular/core';
import { Persona } from '../Administrador/models/persona';
import { Docente } from '../ComiteE/models/docente';

@Pipe({
  name: 'filtroPaciente'
})
export class FiltroPacientePipe implements PipeTransform {
  
  transform(persona: Docente[], searchText: string): any {
    if (searchText == null) return persona;
    return persona.filter(p =>
      p.identificacion.toLowerCase()
     .indexOf(searchText.toLowerCase()) !== -1);
     
    }
    
}
