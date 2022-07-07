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
    return JSON.parse(localStorage.getItem('datos') || '[]');
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
        localStorage.setItem('datos', JSON.stringify(evaluadores));
        return "Evaluador Registrado";
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
