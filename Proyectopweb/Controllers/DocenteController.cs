using Datos;
using Entidad;
using Proyectopweb.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using System.Collections.Generic;
using System.Linq;
using Logica.Comite;
using System;

namespace Proyectopweb.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DocenteController: ControllerBase
    {
         private readonly DocenteService _docenteService;
       
        public DocenteController(ConsultorioContext context)
        {
            _docenteService = new DocenteService(context);
            
        }

        
        [HttpPost]
        public ActionResult<DocenteViewModel> Guardar(DocenteInputModel docenteInputModel)
        {
            var docente = MapearaDocente(docenteInputModel);
            var respuesta = _docenteService.Guardar(docente);
            
            if (respuesta.IsError == true)
            {
                ModelState.AddModelError("Guardar Docente", respuesta.Mensaje);
                var problemDetails = new ValidationProblemDetails(ModelState)
                {
                    Status = StatusCodes.Status400BadRequest,
                };
                return BadRequest(respuesta.Mensaje);
            }
            return Ok(respuesta.Docente);
        }

        [HttpGet]
        public  ActionResult<List<DocenteViewModel>> Gets()
        {
            var respuesta = _docenteService.Consultar();
            if (respuesta.Error == true)
            {
                return BadRequest(respuesta.Mensaje);
            }
            return Ok(respuesta.Docentes.Select(p => new DocenteViewModel(p)));
            //return Ok(new List<PacienteViewModel>());
        }

 [HttpGet("byId")]
        public ActionResult<DocenteViewModel> Gets(string id)
        {
           var respuesta = _docenteService.Buscar(id);
            if (respuesta.IsError == true)
            {
                return BadRequest(respuesta.Mensaje);
            }
            return Ok(respuesta.Docente);
        }

        [HttpGet("Username")]
        public ActionResult<DocenteViewModel> Username(string id)
        {
            var respuesta = this._docenteService.Buscar(id);
             if (respuesta.IsError == true)
            {
                return BadRequest(respuesta.Mensaje);
            }
            return Ok(respuesta.Docente);
        }


        [HttpGet("{identificacion}")]
        public ActionResult<DocenteViewModel> Get(string identificacion)
        {
        var persona = _docenteService.Buscar(identificacion);
        if (persona == null) return NotFound();
        var personaViewModel = new DocenteViewModel(persona.Docente);
        return personaViewModel;
        }



        [HttpGet]
        [ActionName("nombreDocente")]
        public ActionResult<List<DocenteViewModel>> GetNombreDocente()
        {
           
            //var respuesta = this._docenteService.nombreDocente(nombreP);
           var respuesta = _docenteService.Consultar();
            if (respuesta.Error == true)
            {
                return BadRequest(respuesta.Mensaje);
            }
            return Ok(respuesta.Docentes.Select(p => new DocenteViewModel(p)));
        }


        private Docente MapearaDocente(DocenteInputModel docenteInputModel)
        {
            var docente = new Docente();
            docente.tipo_Usuario = docenteInputModel.tipo_Usuario;
            docente.password = docenteInputModel.password;
            docente.nombre_Usuario = docenteInputModel.nombre_Usuario;
            docente.tipo_Identificacion = docenteInputModel.tipo_Identificacion;
            docente.identificacion = docenteInputModel.identificacion;
            docente.nombres = docenteInputModel.nombres;
            docente.primer_Apellido = docenteInputModel.primer_Apellido;
            docente.segundo_Apellido = docenteInputModel.segundo_Apellido;
            docente.numero_Celular = docenteInputModel.numero_Celular;
            docente.correo = docenteInputModel.correo;
            docente.departamento = docenteInputModel.departamento;
            docente.municipio = docenteInputModel.municipio;
            docente.direccion = docenteInputModel.direccion;
            docente.sexo =  docenteInputModel.sexo;
            docente.programa = docenteInputModel.programa;
            docente.facultad = docenteInputModel.facultad;
            docente.profesional = docenteInputModel.profesional;
            docente.maestria = docenteInputModel.maestria;
            docente.especializacion = docenteInputModel.especializacion;
            docente.doctorado = docenteInputModel.doctorado;

            return docente;
        } 
    }
        
}