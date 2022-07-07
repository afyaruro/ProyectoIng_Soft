import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { HandleHttpErrorService } from '../../@base/handle-http-error.service';
import { Docente } from '../models/docente';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {

    
  get(): Docente[] {
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

  post(docente: Docente): string {
    let docentes: Docente[] = [];
    if (this.get() != null) {
      docentes = this.get();
    }
    for (let i = 0; i < docentes.length; i++) {
      if(docentes[i].nombre_Usuario === docente.nombre_Usuario){

        return "Usted ya existe un registro con el nombre de usuario";
      }
    }
        docentes.push(docente);
        localStorage.setItem('datos', JSON.stringify(docentes));
        return "Docente Registrado";
      }



  /*
  baseUrl: string;

  constructor(private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private handleErrorService: HandleHttpErrorService) {
    this.baseUrl = baseUrl; }

    get(): Observable<Docente[]> {
      return this.http.get<Docente[]>(this.baseUrl + 'api/Docente')
        .pipe(
          tap(_ => this.handleErrorService.log(_.toString())),
          catchError(this.handleErrorService.handleError<Docente[]>('Consulta Docente', null))
        );
    }
    post(docente: Docente): Observable<Docente> {
      return this.http.post<Docente>(this.baseUrl + 'api/Docente', docente)
        .pipe(
          tap(_ => this.handleErrorService.log('datos enviados')),
          catchError(this.handleErrorService.handleError<Docente>('Registrar Docente', null))
        );
    }

   // Getnombre(nombre_Usuario: string): Observable<string> {
     // return this.http.get<string>(this.baseUrl + 'api/Docente/Username?id='+ nombre_Usuario)
       //// tap(_ => this.handleErrorService.log('datos enviados')),
       //   catchError(this.handleErrorService.handleError<string>('Registrar Docente', null))
     //   );
   // }

   getNombre(nombre: string): Observable<Docente[]> {
    var nombreP=nombre.toString();
    var aaa = this.http.get<Docente[]>(`${this.baseUrl}api/Docente/nombreDocente`)
    aaa.subscribe(
      {
        next: (res) => {
          console.log(res)
        },
        error: (err) => {
          console.log(err)
        }
      }
    );
    
    return aaa
      .pipe(
        tap(_ => this.handleErrorService.log("Enviadosdasds")),
        catchError(this.handleErrorService.handleError<Docente[]>('Colsultar DocenteId', null))
      );
  }
*/

}
