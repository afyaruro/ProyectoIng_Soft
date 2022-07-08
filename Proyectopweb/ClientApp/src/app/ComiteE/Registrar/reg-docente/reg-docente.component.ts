import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from 'src/app/@base/alert-modal/alert-modal.component';
import { Docente } from '../../models/docente';
import { DocenteService } from '../../services/docente.service';

@Component({
  selector: 'app-reg-docente',
  templateUrl: './reg-docente.component.html',
  styleUrls: ['./reg-docente.component.css']
})
export class RegDocenteComponent implements OnInit {
  docente: Docente;
  tipoIdentificacion = "Tipo de Identificacion";
  sexo = "Sexo";
  profesional = "Profesional";
  especializacion = "Especializacion";
  maestria = "Maestria";
  doctorado = "Doctorado";

  constructor(private docenteService: DocenteService,private modalService: NgbModal) { }

  ngOnInit() {
    this.docente= new Docente();
    this.docente.tipo_Usuario = "Docente";
  }

  add(){
  
    this.docente.tipo_Identificacion = this.tipoIdentificacion;
    this.docente.sexo = this.sexo;
    this.docente.profesional = this.profesional;
    this.docente.especializacion = this.especializacion;
    this.docente.maestria = this.maestria;
    this.docente.doctorado = this.doctorado;

        alert(this.docenteService.post(this.docente));

    /*
    this.docente.tipo_Identificacion = this.tipoIdentificacion;
    this.docente.sexo = this.sexo;
    this.docente.profesional = this.profesional;
    this.docente.especializacion = this.especializacion;
    this.docente.maestria = this.maestria;
    this.docente.doctorado = this.doctorado;

if(this.docente.tipo_Identificacion == "Tipo de Identificacion" ||  this.docente.sexo =="Sexo" || this.docente.profesional =="Profesional" || this.docente.especializacion =="Especializacion" || this.docente.maestria =="Maestria" || this.docente.doctorado =="Doctorado"){

  const messageBox = this.modalService.open(AlertModalComponent)
  messageBox.componentInstance.title = "Alerta";
  messageBox.componentInstance.message = 'Formulario incompleto por favor terminar de diligenciarlo';

}else{
    this.docenteService.post(this.docente).subscribe(p=>{
      if(p!=null){
        const messageBox = this.modalService.open(AlertModalComponent)
        messageBox.componentInstance.title = "Docente Registro";
        messageBox.componentInstance.message = 'Se ha registrado Exitosamente';
        this.docente=p;
      }
      
    });
  }*/

  }

}
