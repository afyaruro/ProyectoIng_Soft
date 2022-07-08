import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-menu-comite',
  templateUrl: './menu-comite.component.html',
  styleUrls: ['./menu-comite.component.css']
})
export class MenuComiteComponent implements OnInit {

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
  }


  salir(){
    this.usuarioService.Salir();
  }
}
