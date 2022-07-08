import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from 'src/app/@base/alert-modal/alert-modal.component';
import { Evaluador } from '../../models/evaluador';
import { EvaluadorService } from '../../services/evaluador.service';

@Component({
  selector: 'app-reg-evaluador',
  templateUrl: './reg-evaluador.component.html',
  styleUrls: ['./reg-evaluador.component.css']
})
export class RegEvaluadorComponent implements OnInit {

  evaluador: Evaluador;
  tipoIdentificacion = "Tipo de Identificacion";
  sexo = "Sexo";
  estado = "Estado";

  constructor(private evaluadorService: EvaluadorService, private modalService: NgbModal) { }

  ngOnInit() {
    this.evaluador = new Evaluador();
    this.evaluador.tipo_Usuario = "Evaluador";
    this.evaluador.estado = "Activo";
  }

  add(){

    this.evaluador.tipo_identificacion = this.tipoIdentificacion;
    this.evaluador.sexo = this.sexo;    

    alert(this.evaluadorService.post(this.evaluador));

//     this.evaluador.tipo_identificacion = this.tipoIdentificacion;
//     this.evaluador.sexo = this.sexo;

// if(this.evaluador.tipo_identificacion == "Tipo de Identificacion" ||  this.evaluador.sexo == "Sexo" || this.evaluador.nombre_Usuario == ""){

//   const messageBox = this.modalService.open(AlertModalComponent)
//   messageBox.componentInstance.title = "Alerta";
//   messageBox.componentInstance.message = 'Formulario incompleto por favor terminar de diligenciarlo';

// }else{

//     this.evaluadorService.post(this.evaluador).subscribe(p=>{
//       if(p!=null){
//         const messageBox = this.modalService.open(AlertModalComponent)
//         messageBox.componentInstance.title = "Evaluador Registro";
//         messageBox.componentInstance.message = 'Se ha registrado Exitosamente';
//         this.evaluador=p;
//       }
      
//     });
//   }

  }

}
