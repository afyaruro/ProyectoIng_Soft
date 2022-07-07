using Datos;
using Entidad;
using Proyectopweb.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using System.Collections.Generic;
using System.Linq;
using Logica.Comite;
using static Proyectopweb.Models.EvaluadorModel;

namespace Proyectopweb.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EvaluadorController: ControllerBase
    {
         private readonly EvaluadorService _evaluadorService;
       
        public EvaluadorController(ConsultorioContext context)
        {
            _evaluadorService = new EvaluadorService(context);
            
        }

        
        [HttpPost]
        public ActionResult<EvaluadorViewModel> Guardar(EvaluadorInputModel evaluadorInputModel)
        {
            var evaluador = MapearaEvaluador(evaluadorInputModel);
            var respuesta = _evaluadorService.Guardar(evaluador);
            
            if (respuesta.IsError == true)
            {
                ModelState.AddModelError("Guardar Evaluador", respuesta.Mensaje);
                var problemDetails = new ValidationProblemDetails(ModelState)
                {
                    Status = StatusCodes.Status400BadRequest,
                };
                return BadRequest(respuesta.Mensaje);
            }
            return Ok(respuesta.Evaluador);
        }

        [HttpGet]
        public  ActionResult<List<EvaluadorViewModel>> Gets()
        {
            var respuesta = _evaluadorService.Consultar();
            if (respuesta.Error == true)
            {
                return BadRequest(respuesta.Mensaje);
            }
            return Ok(respuesta.Evaluador.Select(p => new EvaluadorViewModel(p)));
            //return Ok(new List<PacienteViewModel>());
        }

        [HttpGet("byId")]
        public ActionResult<EvaluadorViewModel> Gets(string id)
        {
           var respuesta = _evaluadorService.Buscar(id);
            if (respuesta.IsError == true)
            {
                return BadRequest(respuesta.Mensaje);
            }
            return Ok(respuesta.Evaluador);
        }
        private Evaluador MapearaEvaluador(EvaluadorInputModel evaluadorInputModel)
        {
            var evaluador = new Evaluador();
            evaluador.tipo_Usuario = evaluadorInputModel.tipo_Usuario;
            evaluador.password = evaluadorInputModel.password;
            evaluador.nombre_Usuario = evaluadorInputModel.nombre_Usuario;
            evaluador.tipo_identificacion = evaluadorInputModel.tipo_identificacion;
            evaluador.identificacion = evaluadorInputModel.identificacion;
            evaluador.nombres = evaluadorInputModel.nombres;
            evaluador.apellidos = evaluadorInputModel.apellidos;
            evaluador.correo = evaluadorInputModel.correo;
            evaluador.sexo =  evaluadorInputModel.sexo;

            return evaluador;
        } 
        
    }
}