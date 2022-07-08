import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { HandleHttpErrorService } from '../../@base/handle-http-error.service';
import { Docente } from '../models/docente';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {

    
  get(): Docente[] {
    return JSON.parse(localStorage.getItem('docente') || '[]');
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
  Eliminar(nameUser: string) {

    let docentesUser = this.get();
    let docentes: Docente[] = [];
    let docente = docentesUser.findIndex(element => element.nombre_Usuario === nameUser)

    for (let i = 0; i < docentesUser.length; i++) {
      if (docentesUser[i] !== docentesUser[docente]) {
        docentes[i] = docentesUser[i];
      }
    }

    localStorage.removeItem('docente');

    for (let i = 0; i < docentes.length; i++) {
      this.post(docentes[i]);
    }
  }

  Modificar(nameUser: string, docent:Docente) {

    let docentesUser = this.get();
    let docentes: Docente[] = [];
    let docente = docentesUser.findIndex(element => element.nombre_Usuario === nameUser)

    for (let i = 0; i < docentesUser.length; i++) {
      if (docentesUser[i] !== docentesUser[docente]) {
        docentes[i] = docentesUser[i];
      }else{
        docentesUser[i].correo = docent.correo;
        docentesUser[i].departamento = docent.departamento;
        docentesUser[i].direccion = docent.direccion;
        docentesUser[i].doctorado = docent.doctorado;
        docentesUser[i].especializacion = docent.especializacion;
        docentesUser[i].facultad = docent.facultad;
        docentesUser[i].identificacion = docent.identificacion;
        docentesUser[i].maestria = docent.maestria;
        docentesUser[i].municipio = docent.municipio;
        docentesUser[i].nombre_Usuario = docent.nombre_Usuario;
        docentesUser[i].nombres = docent.nombres;
        docentesUser[i].numero_Celular = docent.numero_Celular;
        docentesUser[i].password = docent.password;
        docentesUser[i].primer_Apellido = docent.primer_Apellido;
        docentesUser[i].profesional = docent.profesional;
        docentesUser[i].programa = docent.programa;
        docentesUser[i].segundo_Apellido = docent.segundo_Apellido;
        docentesUser[i].sexo = docent.sexo;
        docentesUser[i].tipo_Identificacion = docent.tipo_Identificacion;
        docentesUser[i].tipo_Usuario = docent.tipo_Usuario;
        docentes[i] = docentesUser[i];
      }
    }

    localStorage.removeItem('docente');

    for (let i = 0; i < docentes.length; i++) {
      this.post(docentes[i]);
    }
  }

  
  

  getnameUser(name: string, password: string): boolean{

    let docentes = this.get();

    for (let i = 0; i < docentes.length; i++) {
      if(docentes[i].nombre_Usuario == name && docentes[i].password == password ){
          return true;
      }

    }
    return false;
  }

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
        localStorage.setItem('docente', JSON.stringify(docentes));
        return "Docente Registrado";
      }


      BuscarDocente(nameUser: string):Docente{

        let docentesUser = this.get();
        let docente = docentesUser.findIndex(element => element.nombre_Usuario === nameUser)
    
            return docentesUser[docente];
            
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
