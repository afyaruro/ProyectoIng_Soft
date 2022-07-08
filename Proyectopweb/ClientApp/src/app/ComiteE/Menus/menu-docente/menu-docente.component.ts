import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocenteService } from '../../services/docente.service';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-menu-docente',
  templateUrl: './menu-docente.component.html',
  styleUrls: ['./menu-docente.component.css']
})
export class MenuDocenteComponent implements OnInit {

  constructor(private usuarioService: UsuarioService, private docenteService: DocenteService,private router: Router) { }

  ngOnInit() {
  }

  Eliminar(){
      this.docenteService.Eliminar(this.usuarioService.BuscarUser().nombre_Usuario);
      this.salir()
  }

  salir(){
    this.usuarioService.Salir();
    this.router.navigate(["/loginC"]);
  }

}
