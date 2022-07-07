
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { PersonaConsultaComponent } from './Administrador/persona-consulta/persona-consulta.component';
import { PersonaRegistroComponent } from './Administrador/persona-registro/persona-registro.component';
import { RegistroEmpladosComponent } from './Administrador/registro-emplados/registro-emplados.component';
import { GestionCitaComponent } from './Administrador/gestion-cita/gestion-cita.component';
import { EvaluacionComponent } from './Administrador/evaluacion/evaluacion.component';
import { TratamientoComponent } from './Administrador/tratamiento/tratamiento.component';
import { ConsultarEmpleadoComponent } from './Administrador/consultar-empleado/consultar-empleado.component';
import { ConsultarCitasComponent } from './Administrador/consultar-citas/consultar-citas.component';
import { ConsultaEvaluacionComponent } from './Administrador/consulta-evaluacion/consulta-evaluacion.component';
import { ConsultaTratamientoComponent } from './Administrador/consulta-tratamiento/consulta-tratamiento.component';
import { NavMenuEmpleadoComponent } from './nav-menu-empleado/nav-menu-empleado.component';
import { NavMenuClienteComponent } from './nav-menu-Cliente/nav-menu-cliente.component';
import { InstructivoComponent } from './Administrador/instructivo/instructivo.component';
import { RegistrarHistoriaClinicaComponent } from './Administrador/registrar-historia-clinica/registrar-historia-clinica.component';
import { FiltroPacientePipe } from './pipe/filtro-paciente.pipe';
import { FiltroPsicologoPipe } from './pipe/filtro-psicologo.pipe';
import { FiltroCitaPipe } from './pipe/filtro-cita.pipe';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { ExamenMentalComponent } from './examen-mental/examen-mental.component';
import { AlertModalComponent } from './@base/alert-modal/alert-modal.component';
import { AgendaComponent } from './Administrador/agenda/agenda.component';
import { ConsultarAgendaComponent } from './Administrador/consultar-agenda/consultar-agenda.component';

//Comite Editorial

import { LoginCComponent } from './ComiteE/login-c/login-c.component';
import { RegDocenteComponent } from './ComiteE/Registrar/reg-docente/reg-docente.component';
import { RegEvaluadorComponent } from './ComiteE/Registrar/reg-evaluador/reg-evaluador.component';
import { RegProductividadComponent } from './ComiteE/Registrar/reg-productividad/reg-productividad.component';
import { RegSolicitudComponent } from './ComiteE/Registrar/reg-solicitud/reg-solicitud.component';
import { ConsDocenteComponent } from './ComiteE/Consultar/cons-docente/cons-docente.component';
import { ConsEvaluadorComponent } from './ComiteE/Consultar/cons-evaluador/cons-evaluador.component';
import { ConsProductividadComponent } from './ComiteE/Consultar/cons-productividad/cons-productividad.component';
import { ConsEstadoSolicitudComponent } from './ComiteE/Consultar/cons-estado-solicitud/cons-estado-solicitud.component';
import { ModDocenteComponent } from './ComiteE/Modificar/mod-docente/mod-docente.component';
import { ModEvaluadorComponent } from './ComiteE/Modificar/mod-evaluador/mod-evaluador.component';
import { ModProductividadComponent } from './ComiteE/Modificar/mod-productividad/mod-productividad.component';
import { EliminarDocenteComponent } from './ComiteE/Eliminar/eliminar-docente/eliminar-docente.component';
import { InactivarEvaluadorComponent } from './ComiteE/Eliminar/inactivar-evaluador/inactivar-evaluador.component';
import { EliminarProductividadComponent } from './ComiteE/Eliminar/eliminar-productividad/eliminar-productividad.component';
import { EvaluarProductividadComponent } from './ComiteE/evaluar-productividad/evaluar-productividad.component';
import { AsignarEvaluadoresComponent } from './ComiteE/asignar-evaluadores/asignar-evaluadores.component';
import { EnviarCorreccionesComponent } from './ComiteE/enviar-correcciones/enviar-correcciones.component';
import { MenuComiteComponent } from './ComiteE/Menus/menu-comite/menu-comite.component';
import { MenuEvaluadorComponent } from './ComiteE/Menus/menu-evaluador/menu-evaluador.component';
import { MenuDocenteComponent } from './ComiteE/Menus/menu-docente/menu-docente.component';
import { HomeComponent } from './ComiteE/home/home.component';
import { HeaderComponent } from './ComiteE/header/header.component';
import { FiltroDocentePipe } from './ComiteE/pipe/filtro-docente.pipe';
import { FiltroEvaluadorPipe } from './ComiteE/pipe/filtro-evaluador.pipe';




@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    PersonaConsultaComponent,
    PersonaRegistroComponent,
    RegistroEmpladosComponent,
    GestionCitaComponent,
    EvaluacionComponent,
    TratamientoComponent,
    ConsultarEmpleadoComponent,
    ConsultarCitasComponent,
    ConsultaEvaluacionComponent,
    ConsultaTratamientoComponent,
    NavMenuEmpleadoComponent,
    NavMenuClienteComponent,
    InstructivoComponent,
    RegistrarHistoriaClinicaComponent,
    FiltroPacientePipe,
    FiltroPsicologoPipe,
    FiltroCitaPipe,
    LoginComponent,
    FooterComponent,
    ExamenMentalComponent,
    AlertModalComponent,
    AgendaComponent,
    ConsultarAgendaComponent,
    //Comite Editorial
    LoginCComponent,
    RegDocenteComponent,
    RegEvaluadorComponent,
    RegProductividadComponent,
    RegSolicitudComponent,
    ConsDocenteComponent,
    ConsEvaluadorComponent,
    ConsProductividadComponent,
    ConsEstadoSolicitudComponent,
    ModDocenteComponent,
    ModEvaluadorComponent,
    ModProductividadComponent,
    EliminarDocenteComponent,
    InactivarEvaluadorComponent,
    EliminarProductividadComponent,
    EvaluarProductividadComponent,
    AsignarEvaluadoresComponent,
    EnviarCorreccionesComponent,
    MenuComiteComponent,
    MenuEvaluadorComponent,
    MenuDocenteComponent,
    HomeComponent,
    HeaderComponent,
    FiltroDocentePipe,
    FiltroEvaluadorPipe,

  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot([
      { path: 'personaRegistro', component: PersonaRegistroComponent },


      {
        path: 'menuAdministrador', component: NavMenuComponent,
        children: [
          { path: 'personaConsulta', component: PersonaConsultaComponent },
          { path: 'registroEmpleado', component: RegistroEmpladosComponent },
          { path: 'consultarEmpleado', component: ConsultarEmpleadoComponent },

        ]
      },

      { path: 'instructivo', component: InstructivoComponent },

      
      { path: 'login', component: LoginComponent },

      {
        path: 'menuEmpleado', component: NavMenuEmpleadoComponent,
        children: [
          { path: 'Realizarevaluacion', component: EvaluacionComponent },
          { path: 'Registrartratamiento', component: TratamientoComponent },
          { path: 'RegistrarhistoriaClinica', component: RegistrarHistoriaClinicaComponent },
          { path: 'RegistrarAgenda', component: AgendaComponent },
          { path: 'ConsultarAgenda', component: ConsultarAgendaComponent },
        ]
      },

      {
        path: 'menuPaciente', component: NavMenuClienteComponent,
        children: [
          { path: 'AgendarCita', component: GestionCitaComponent },
          { path: 'consultarCitas', component: ConsultarCitasComponent },
          { path: 'consultarEvaluacion', component: ConsultaEvaluacionComponent },
          { path: 'consultarTratamiento', component: ConsultaTratamientoComponent },
          
        ]

        
      },

      //Rutas Comite
      { path: 'loginC', component: LoginCComponent },
      { path: 'registro_docente', component: RegDocenteComponent },

      {
        path: 'menuComite', component: MenuComiteComponent,
        children: [

          { path: 'home', component: HomeComponent },
          { path: 'regEvaluador', component: RegEvaluadorComponent },
          { path: 'consDocente', component: ConsDocenteComponent},
          { path: 'consEvaluador', component: ConsEvaluadorComponent},
          
        ]
      },
      
      {
        path: 'menuDocente', component: MenuDocenteComponent,
        children: [

          { path: 'home', component: HomeComponent },
          
        ]
      },

      {
        path: 'menuEvaluador', component: MenuEvaluadorComponent,
        children: [

          { path: 'home', component: HomeComponent },
          
        ]
      },


      { path: '', redirectTo: '/loginC', pathMatch: 'full' }
    ])
  ],
  entryComponents:[AlertModalComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
