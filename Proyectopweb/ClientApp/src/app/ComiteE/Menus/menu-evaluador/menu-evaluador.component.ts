import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Evaluador } from '../../models/evaluador';
import { EvaluadorService } from '../../services/evaluador.service';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-menu-evaluador',
  templateUrl: './menu-evaluador.component.html',
  styleUrls: ['./menu-evaluador.component.css']
})
export class MenuEvaluadorComponent implements OnInit {

  evaluador: Evaluador;

  constructor(private usuarioService: UsuarioService,private evaluadorService: EvaluadorService  ,private router: Router) { }

  ngOnInit() {
    this.evaluador =this.evaluadorService.BuscarEvaluador(this.usuarioService.BuscarUser().nombre_Usuario);
    this.evaluador.estado = "Inactivo";
  }

  
  salir(){
    this.usuarioService.Salir();
  }

  Inactivar(){
    this.evaluadorService.Modificar(this.usuarioService.BuscarUser().nombre_Usuario, this.evaluador);
    this.usuarioService.ModificarUser(this.evaluador.password, this.evaluador.nombre_Usuario, this.evaluador.tipo_Usuario);
    alert("Evaluador Modificado")    
  }

}
