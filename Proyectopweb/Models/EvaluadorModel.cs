

using Entidad;

namespace Proyectopweb.Models
{
    public class EvaluadorModel
    {
         public class EvaluadorInputModel
    {
            
            public string nombre_Usuario {get; set;}
            public string tipo_Usuario{get; set;}
            public string password {get; set;}
            public string nombres {get; set;}
            public string apellidos {get; set;}
            public string tipo_identificacion {get; set;}
            public string identificacion {get; set;}
            public string sexo {get; set;}
            public string correo {get; set;}
       
    
    }
    
    public class EvaluadorViewModel : EvaluadorInputModel
    {
        public EvaluadorViewModel()
        {

        }
        public EvaluadorViewModel(Evaluador evaluador)
        {
            
            this.nombre_Usuario = evaluador.nombre_Usuario;
            this.tipo_Usuario = evaluador.tipo_Usuario;
            this.password = evaluador.password;
            this.tipo_identificacion = evaluador.tipo_identificacion;
            this.identificacion = evaluador.identificacion;
            this.nombres = evaluador.nombres;
            this.apellidos = evaluador.apellidos;
            this.sexo = evaluador.sexo;
            this.correo = evaluador.correo;

        }
    }
    }
}