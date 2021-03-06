import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Evaluador } from '../../models/evaluador';
import { EvaluadorService } from '../../services/evaluador.service';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-mod-evaluador',
  templateUrl: './mod-evaluador.component.html',
  styleUrls: ['./mod-evaluador.component.css']
})
export class ModEvaluadorComponent implements OnInit {

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
    this.evaluador.tipo_Usuario = "Evaluador";
  }


  Modificar(){
    this.evaluadorService.Modificar(this.usuarioService.BuscarUser().nombre_Usuario, this.evaluador);
    this.usuarioService.ModificarUser(this.evaluador.password, this.evaluador.nombre_Usuario, this.evaluador.tipo_Usuario);
    alert("Evaluador Modificado")
}

}
