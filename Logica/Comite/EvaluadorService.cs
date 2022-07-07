using System;
using Datos;
using Entidad;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Logica.Comite
{
    public class EvaluadorService
    {
        
 private readonly ConsultorioContext _context;

        public EvaluadorService(ConsultorioContext context)
        {
            _context = context;
        }

        public EvaluadorGuardarResponse Guardar(Evaluador evaluador)
        {
            try
            {

                if (_context.evaluadores.Find(evaluador.nombre_Usuario)== null)
                {
                    _context.evaluadores.Add(evaluador);
                    _context.SaveChanges();
                    return new EvaluadorGuardarResponse(evaluador);
                }
                return new EvaluadorGuardarResponse($"No fue posible Guardar la información, porque ya existe un registro");
            }
            catch (Exception e)
            {
                return new EvaluadorGuardarResponse($"Error inesperado al Guardar: { e.Message}");
            }

        }
        public string Eliminar(string nombre_Usuario)
        {
            try
            {
                var evaluador = _context.evaluadores.Find(nombre_Usuario);
                if (evaluador != null)
                {
                    _context.Remove(evaluador);
                    _context.SaveChanges();
                    return $"Se Eliminó el registro del evaluador con el nombre de usuario: {nombre_Usuario}";
                }
                return $"No fue posible eliminar el registro, porque no existe el evaluador con nombre de usuario {nombre_Usuario}";
            }
            catch (Exception e)
            {
                return $"Error inesperado al Eliminar: {e.Message}";
            }
            
        }
        public EvaluadorConsultaResponse Consultar()
        {
            try
            {

                return new EvaluadorConsultaResponse(_context.evaluadores.ToList());

            }
            catch (Exception e)
            {
                return new EvaluadorConsultaResponse($"Error inesperado al Consultar: {e.Message}");
            }
            
        }
        public EvaluadorBuscarResponse Buscar(string nombre_Usuario)
        {
            try
            {
        
                var evaluador = _context.evaluadores.Find(nombre_Usuario);
                if (evaluador != null)
                {
                    return new EvaluadorBuscarResponse(evaluador);
                }
                return new EvaluadorBuscarResponse("No se encontraró un registro con el nombre de usuario Solicitado");
                
            }
            catch (Exception e)
            {
                return new EvaluadorBuscarResponse("Error inesperado al Buscar:" + e.Message);
            }
            
        }
    }

     public class EvaluadorBuscarResponse
    {
        public Evaluador Evaluador { get; set; }
        public string Mensaje { get; set; }
        public bool IsError { get; set; }

        public EvaluadorBuscarResponse(Evaluador evaluador)
        {
            this.Evaluador = evaluador;
            IsError = false;
        }
        public EvaluadorBuscarResponse(string mensaje)
        {
            Mensaje = mensaje;
            IsError = true;
        }
    }

    public class EvaluadorConsultaResponse
    {
        public List<Evaluador> Evaluador { get; set; }
        public string Mensaje { get; set; }
        public bool Error { get; set; }
        public EvaluadorConsultaResponse(List<Evaluador> evaluadores)
        {
            this.Evaluador = evaluadores;
            Error = false;
        }
        public EvaluadorConsultaResponse(string mensaje)
        {
            Mensaje = mensaje;
            Error = true;
        }
    }

    public class EvaluadorGuardarResponse
    {
        public Evaluador Evaluador { get; set; }
        public string Mensaje { get; set; }
      
        public bool IsError { get; set; }

        public EvaluadorGuardarResponse(Evaluador evaluador)
        {
            this.Evaluador = evaluador;
            IsError = false;
        }
        public EvaluadorGuardarResponse(string mensaje)
        {
            Mensaje = mensaje;
            IsError = true;
        }




    }
}