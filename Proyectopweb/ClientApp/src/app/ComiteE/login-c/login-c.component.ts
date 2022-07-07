import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from 'src/app/@base/alert-modal/alert-modal.component';
import { Usuario } from '../models/usuario';
import { DocenteService } from '../services/docente.service';

@Component({
  selector: 'app-login-c',
  templateUrl: './login-c.component.html',
  styleUrls: ['./login-c.component.css']
})
export class LoginCComponent implements OnInit {

  usuario: Usuario;
  tipousuario = "Tipo de Usuario";
  nombreUser = "";
  password = "";
  constructor(private docenteService: DocenteService,private router: Router, private modalService: NgbModal,) { }

  ngOnInit() {

    this.usuario = new Usuario();
    this.usuario.tipo_Usuario = "Comite";
    this.usuario.nombre_Usuario = "admin";
    this.usuario.password = "admin";

  }

  IngresarComite(){
    this.router.navigate(["/menuComite/home"]);
  }

  IngresarDocente(){
    this.router.navigate(["/menuDocente/home"]);
  }

  IngresarEvaluador(){
    this.router.navigate(["/menuEvaluador/home"]);
  }

  Ingresar(){
    if (this.tipousuario === "Tipo de Usuario"){
      const messageBox = this.modalService.open(AlertModalComponent)
      messageBox.componentInstance.title = "Alerta";
      messageBox.componentInstance.message = 'Seleccione el Tipo de usuario';
   }
    
    else if (this.tipousuario === "Docente"){

      
    }

    else if (this.tipousuario === "Evaluador"){
      this.IngresarEvaluador();
    }

    else if (this.tipousuario === "Comite"){
      if(this.nombreUser=="admin" && this.password =="admin"){
        this.IngresarComite();
      } else{
        const messageBox = this.modalService.open(AlertModalComponent)
        messageBox.componentInstance.title = "Alerta";
        messageBox.componentInstance.message = 'El Usuario no esta Registrado';
      }
      
    }

  }


}
