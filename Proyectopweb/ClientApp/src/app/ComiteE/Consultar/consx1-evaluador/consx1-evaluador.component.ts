import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Docente } from '../../models/docente';
import { Evaluador } from '../../models/evaluador';
import { DocenteService } from '../../services/docente.service';
import { EvaluadorService } from '../../services/evaluador.service';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-consx1-evaluador',
  templateUrl: './consx1-evaluador.component.html',
  styleUrls: ['./consx1-evaluador.component.css']
})
export class Consx1EvaluadorComponent implements OnInit {

  evaluador: Evaluador;
  tipoIdentificacion = "";
  sexo = "";
  estado = "";

  constructor(private usuarioService: UsuarioService,private evaluadorService: EvaluadorService,private modalService: NgbModal) { }

  ngOnInit() {
    this.evaluador =this.evaluadorService.BuscarEvaluador(this.usuarioService.BuscarUser().nombre_Usuario);
    this.tipoIdentificacion = this.evaluador.tipo_identificacion;
    this.sexo = this.evaluador.sexo;
    this.estado = this.evaluador.estado;
  }

}
