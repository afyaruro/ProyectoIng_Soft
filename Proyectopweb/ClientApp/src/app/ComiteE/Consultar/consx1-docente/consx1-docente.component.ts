import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Docente } from '../../models/docente';
import { DocenteService } from '../../services/docente.service';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-consx1-docente',
  templateUrl: './consx1-docente.component.html',
  styleUrls: ['./consx1-docente.component.css']
})
export class Consx1DocenteComponent implements OnInit {

  docente: Docente;
  tipoIdentificacion = "";
  sexo = "";
  profesional = "";
  especializacion = "";
  maestria = "";
  doctorado = "";

  constructor(private usuarioService: UsuarioService,private docenteService: DocenteService,private modalService: NgbModal) { }

  ngOnInit() {
    this.docente =this.docenteService.BuscarDocente(this.usuarioService.BuscarUser().nombre_Usuario);
    this.tipoIdentificacion = this.docente.tipo_Identificacion;
    this.sexo = this.docente.sexo;
    this.profesional = this.docente.profesional;
    this.especializacion = this.docente.especializacion;
    this.maestria = this.docente.maestria;
    this.doctorado = this.docente.doctorado;
    this.docente.tipo_Usuario = "Docente";
  }

}
