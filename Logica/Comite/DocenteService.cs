using System;
using Datos;
using Entidad;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace Logica.Comite
{
    public class DocenteService
    {
         private readonly ConsultorioContext _context;

        public DocenteService(ConsultorioContext context)
        {
            _context = context;
        }

        public DocenteGuardarResponse Guardar(Docente docente)
        {
            try
            {

                if (_context.docentes.Find(docente.nombre_Usuario)== null)
                {
                    _context.docentes.Add(docente);
                    _context.SaveChanges();
                    return new DocenteGuardarResponse(docente);
                }
                return new DocenteGuardarResponse($"No fue posible Guardar la información, porque ya existe un registro");
            }
            catch (Exception e)
            {
                return new DocenteGuardarResponse($"Error inesperado al Guardar: { e.Message}");
            }

        }
        public string Eliminar(string nombre_Usuario)
        {
            try
            {
                var docente = _context.docentes.Find(nombre_Usuario);
                if (docente != null)
                {
                    _context.Remove(docente);
                    _context.SaveChanges();
                    return $"Se Eliminó el registro del docente con el nombre de usuario: {nombre_Usuario}";
                }
                return $"No fue posible eliminar el registro, porque no existe el docente con nombre de usuario {nombre_Usuario}";
            }
            catch (Exception e)
            {
                return $"Error inesperado al Eliminar: {e.Message}";
            }
            
        }
        public DocenteConsultaResponse Consultar()
        {
            try
            {

                return new DocenteConsultaResponse(_context.docentes.ToList());

            }
            catch (Exception e)
            {
                return new DocenteConsultaResponse($"Error inesperado al Consultar: {e.Message}");
            }
            
        }
        public DocenteBuscarResponse Buscar(string nombre_Usuario)
        {
            try
            {
        
                var docente = _context.docentes.Find(nombre_Usuario);
                if (docente != null)
                {
                    return new DocenteBuscarResponse(docente);
                }
                return new DocenteBuscarResponse("No se encontraró un registro con el nombre de usuario Solicitado");
                
            }
            catch (Exception e)
            {
                return new DocenteBuscarResponse("Error inesperado al Buscar:" + e.Message);
            }
            
        }

public Docente nombreDocente(string id){
            
            Console.WriteLine(id);
            var docentes=_context.docentes.ToList();
            if (docentes != null)
                {
                     foreach(var e in docentes){
                         if(e.identificacion == id){
                            return e;
                        }
                     }
            }

                return null;
            
            
        }

    }

     public class DocenteBuscarResponse
    {
        public Docente Docente { get; set; }
        public string Mensaje { get; set; }
        public bool IsError { get; set; }

        public DocenteBuscarResponse(Docente docente)
        {
            this.Docente = docente;
            IsError = false;
        }
        public DocenteBuscarResponse(string mensaje)
        {
            Mensaje = mensaje;
            IsError = true;
        }
    }

    public class DocenteConsultaResponse
    {
        public List<Docente> Docentes { get; set; }
        public string Mensaje { get; set; }
        public bool Error { get; set; }
        public DocenteConsultaResponse(List<Docente> docentes)
        {
            this.Docentes = docentes;
            Error = false;
        }
        public DocenteConsultaResponse(string mensaje)
        {
            Mensaje = mensaje;
            Error = true;
        }
    }

    public class DocenteGuardarResponse
    {
        public Docente Docente { get; set; }
        public string Mensaje { get; set; }
      
        public bool IsError { get; set; }

        public DocenteGuardarResponse(Docente docente)
        {
            this.Docente = docente;
            IsError = false;
        }
        public DocenteGuardarResponse(string mensaje)
        {
            Mensaje = mensaje;
            IsError = true;
        }
    }
}