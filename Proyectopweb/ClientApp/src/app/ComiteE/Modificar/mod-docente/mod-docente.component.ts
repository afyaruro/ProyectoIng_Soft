import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Docente } from '../../models/docente';
import { DocenteService } from '../../services/docente.service';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-mod-docente',
  templateUrl: './mod-docente.component.html',
  styleUrls: ['./mod-docente.component.css']
})
export class ModDocenteComponent implements OnInit {
  docente: Docente;
  tipoIdentificacion = "";
  sexo = "";
  profesional = "";
  especializacion = "";
  maestria = "";
  doctorado = "";

  
  constructor(private usuarioService: UsuarioService,private docenteService: DocenteService,private modalService: NgbModal) { 
  }

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

  Modificar(){
      this.docenteService.Modificar(this.usuarioService.BuscarUser().nombre_Usuario, this.docente);
      this.usuarioService.ModificarUser(this.docente.password, this.docente.nombre_Usuario, this.docente.tipo_Usuario);
      alert("Docente Modificado")
  }

}
