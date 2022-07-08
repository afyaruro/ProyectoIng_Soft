import { Component, OnInit } from '@angular/core';
import { Evaluador } from '../../models/evaluador';
import { EvaluadorService } from '../../services/evaluador.service';

@Component({
  selector: 'app-cons-evaluador',
  templateUrl: './cons-evaluador.component.html',
  styleUrls: ['./cons-evaluador.component.css']
})
export class ConsEvaluadorComponent implements OnInit {
  searchText:string;
  evaluadores: Evaluador[];

  constructor(private evaluadorService: EvaluadorService) { }

  ngOnInit() {
    this.evaluadores=this.evaluadorService.get();

    /*
    this.evaluadorService.get().subscribe(result => {
      this.evaluadores = result;
   });*/
  }

}
