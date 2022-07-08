import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from 'src/app/@base/alert-modal/alert-modal.component';
import { Usuario } from '../models/usuario';
import { DocenteService } from '../services/docente.service';
import { EvaluadorService } from '../services/evaluador.service';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-login-c',
  templateUrl: './login-c.component.html',
  styleUrls: ['./login-c.component.css']
})
export class LoginCComponent implements OnInit {

  usuario: Usuario;
  comite: Usuario;
  tipousuario = "Tipo de Usuario";
  nombreUser = "";
  password = "";
  constructor(private usuarioService: UsuarioService,private evaluadorService: EvaluadorService,private docenteService: DocenteService,private router: Router, private modalService: NgbModal,) { }
 
  ngOnInit() {

    this.comite = new Usuario();
    this.comite.tipo_Usuario = "Comite";
    this.comite.nombre_Usuario = "admin";
    this.comite.password = "admin";

    this.usuario = new Usuario();

  }

  IngresarComite(){
    this.router.navigate(["/menuComite/home"]);
    this.usuarioService.post(this.usuario);
  }

  IngresarDocente(){
    this.router.navigate(["/menuDocente/home"]);
    this.usuarioService.post(this.usuario);
  }

  IngresarEvaluador(){
    this.router.navigate(["/menuEvaluador/home"]);
    this.usuarioService.post(this.usuario);
  }

  Ingresar(){

        this.usuario.nombre_Usuario = this.nombreUser;
        this.usuario.password = this.password;
        this.usuario.tipo_Usuario = this.tipousuario;

    if (this.tipousuario === "Tipo de Usuario"){
      const messageBox = this.modalService.open(AlertModalComponent)
      messageBox.componentInstance.title = "Alerta";
      messageBox.componentInstance.message = 'Seleccione el Tipo de usuario';
   }
    
    else if (this.tipousuario === "Docente"){
        if(this.docenteService.getnameUser(this.nombreUser, this.password) == true){
          const messageBox = this.modalService.open(AlertModalComponent)
          messageBox.componentInstance.title = "Alerta";
          messageBox.componentInstance.message = 'Docente Encontrado...';
          this.IngresarDocente();
        }
        else{
          const messageBox = this.modalService.open(AlertModalComponent)
          messageBox.componentInstance.title = "Alerta";
          messageBox.componentInstance.message = 'El usuario no esta registrado o la esta contraseña incorrecta...';
        }
      
    }

    else if (this.tipousuario === "Evaluador"){
      if(this.evaluadorService.getnameUser(this.nombreUser, this.password) == true){
        const messageBox = this.modalService.open(AlertModalComponent)
        messageBox.componentInstance.title = "Alerta";
        messageBox.componentInstance.message = 'Evaluador Encontrado...';
        this.IngresarEvaluador();
      }
      else{
        const messageBox = this.modalService.open(AlertModalComponent)
        messageBox.componentInstance.title = "Alerta";
        messageBox.componentInstance.message = 'El usuario no esta registrado o la esta contraseña incorrecta...';
      }
    }

    else if (this.tipousuario === "Comite"){
      if(this.nombreUser=="admin" && this.password =="admin"){
        const messageBox = this.modalService.open(AlertModalComponent)
        messageBox.componentInstance.title = "Alerta";
        messageBox.componentInstance.message = 'Comite Encontrado...';
        this.IngresarEvaluador();
        this.IngresarComite();
      } else{
        const messageBox = this.modalService.open(AlertModalComponent)
        messageBox.componentInstance.title = "Alerta";
        messageBox.componentInstance.message = 'El Usuario no esta Registrado';
      }
      
    }

    

  }


}
