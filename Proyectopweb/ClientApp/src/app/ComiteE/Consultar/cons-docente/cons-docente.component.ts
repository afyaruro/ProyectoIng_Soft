import { Component, OnInit } from '@angular/core';
import { Docente } from '../../models/docente';
import { DocenteService } from '../../services/docente.service';

@Component({
  selector: 'app-cons-docente',
  templateUrl: './cons-docente.component.html',
  styleUrls: ['./cons-docente.component.css']
})
export class ConsDocenteComponent implements OnInit {
  searchText:string;
  docentes: Docente[];
   
  constructor(private docenteService: DocenteService) { }

  ngOnInit() {
    /*this.docenteService.get().subscribe(result => {
      this.docentes = result;
   });*/
   this.docentes=this.docenteService.get();
  }
}
