import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  get(): Usuario[] {
    return JSON.parse(localStorage.getItem('usuario') || '[]');
  }
/*
  GuardarAbono(abono: number, identificacion: string) {

    let proyectosviviendas = this.get();
    let viviendas: ProyectoVivienda[] = [];
    let proyectovivienda = proyectosviviendas.findIndex(element => element.identificacionCliente === identificacion)

    for (let i = 0; i < proyectosviviendas.length; i++) {
      if (proyectosviviendas[i] !== proyectosviviendas[proyectovivienda]) {
        viviendas[i] = proyectosviviendas[i];
      } else {
        proyectosviviendas[i].valorAbonado = proyectosviviendas[i].valorAbonado + abono;
        viviendas[i] = proyectosviviendas[i];
        if(viviendas[i].valorAbonado >= viviendas[i].cuotainicial){
          alert("Felicidades Usted ya Pago la Cuota Inicial  :D");
        }else{
          alert("Abono Registrado...");
        }
      }
    }

    localStorage.removeItem('datos');

    for (let i = 0; i < viviendas.length; i++) {
      this.post(viviendas[i]);
    }
  }
*/

Salir(){
  localStorage.removeItem('usuario');
}

getnameUser(name: string, password: string): boolean{

  let usuarios = this.get();

  for (let i = 0; i < usuarios.length; i++) {
    if(usuarios[i].nombre_Usuario == name && usuarios[i].password == password ){
        return true;
    }

  }
  return false;
}

BuscarUser(): Usuario{

  let usuarios = this.get();

  return usuarios[0];
}

ModificarUser(password:string, name:string , tipo_Usuario: string){
  let UsuariosUser = this.BuscarUser();
  let usuario: Usuario;

      UsuariosUser.nombre_Usuario = name;
      UsuariosUser.password = password;
      UsuariosUser.tipo_Usuario = tipo_Usuario;
      usuario = UsuariosUser;
     localStorage.removeItem('usuario');
     this.post(usuario);

}


  post(usuario: Usuario){
    let usuarios: Usuario[] = [];

        usuarios.push(usuario);
        localStorage.setItem('usuario', JSON.stringify(usuarios));

      }


}
