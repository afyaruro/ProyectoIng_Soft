import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { HandleHttpErrorService } from '../../@base/handle-http-error.service';
import { Evaluador } from '../models/evaluador';
import { Docente } from '../models/docente';

@Injectable({
  providedIn: 'root'
})
export class EvaluadorService {

  
    
  get(): Evaluador[] {
    return JSON.parse(localStorage.getItem('evaluador') || '[]');
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


getnameUser(name: string, password: string): boolean{

  let evaluadores = this.get();

  for (let i = 0; i < evaluadores.length; i++) {
    if(evaluadores[i].nombre_Usuario == name && evaluadores[i].password == password ){
        return true;
    }

  }
  return false;
}

  post(evaluador: Evaluador): string {
    let evaluadores: Evaluador[] = [];
    if (this.get() != null) {
      evaluadores = this.get();
    }
    for (let i = 0; i < evaluadores.length; i++) {
      if(evaluadores[i].nombre_Usuario === evaluador.nombre_Usuario){

        return "El evaluador ya existe en la base de datos";
      }
    }
        evaluadores.push(evaluador);
        localStorage.setItem('evaluador', JSON.stringify(evaluadores));
        return "Evaluador Registrado";
      }


      BuscarEvaluador(nameUser: string):Evaluador{

        let evaluadoresUser = this.get();
        let evaluador = evaluadoresUser.findIndex(element => element.nombre_Usuario === nameUser)
    
            return evaluadoresUser[evaluador];
            
        }

        Modificar(nameUser: string, evaluad:Evaluador) {

          let  evaluadoresUser = this.get();
          let evaluadores: Evaluador[] = [];
          let evaluador = evaluadoresUser.findIndex(element => element.nombre_Usuario === nameUser)
      
          for (let i = 0; i < evaluadoresUser.length; i++) {
            if (evaluadoresUser[i] !== evaluadoresUser[evaluador]) {
              evaluadores[i] = evaluadoresUser[i];
            }else{
              evaluadoresUser[i].apellidos = evaluad.apellidos;
              evaluadoresUser[i].correo = evaluad.correo;
              evaluadoresUser[i].estado = evaluad.estado;
              evaluadoresUser[i].sexo = evaluad.sexo;
              evaluadoresUser[i].password= evaluad.password;
              evaluadoresUser[i].tipo_Usuario = evaluad.tipo_Usuario;
              evaluadoresUser[i].identificacion = evaluad.identificacion;
              evaluadoresUser[i].nombre_Usuario = evaluad.nombre_Usuario;
              evaluadoresUser[i].nombres = evaluad.nombres;
              evaluadoresUser[i].tipo_identificacion = evaluad.tipo_identificacion;
              evaluadores[i] = evaluadoresUser[i];
            }
          }

          localStorage.removeItem('evaluador');
      
          for (let i = 0; i < evaluadores.length; i++) {
            this.post(evaluadores[i]);
          }
        }




  // baseUrl: string;

  // constructor(private http: HttpClient,
  //   @Inject('BASE_URL') baseUrl: string,
  //   private handleErrorService: HandleHttpErrorService) {
  //   this.baseUrl = baseUrl; }

  //   get(): Observable<Evaluador[]> {
  //     return this.http.get<Evaluador[]>(this.baseUrl + 'api/Evaluador')
  //       .pipe(
  //         tap(_ => this.handleErrorService.log(_.toString())),
  //         catchError(this.handleErrorService.handleError<Evaluador[]>('Consulta Evaluador', null))
  //       );
  //   }
  //   post(evaluador: Evaluador): Observable<Evaluador> {
  //     return this.http.post<Evaluador>(this.baseUrl + 'api/Evaluador', evaluador)
  //       .pipe(
  //         tap(_ => this.handleErrorService.log('datos enviados')),
  //         catchError(this.handleErrorService.handleError<Evaluador>('Registrar Evaluador', null))
  //       );
  //   }
}
