using System;
using System.ComponentModel.DataAnnotations;
using Entidad;
using Proyectopweb;

namespace Proyectopweb.Models
{
    public class DocenteInputModel
    {
        [Required(ErrorMessage = "El nombre de usuario es requerido")]
        public string nombre_Usuario {get; set;}
        [Required(ErrorMessage = "El tipo de usuario es requerido")]
        public string tipo_Usuario{get; set;}
        [Required(ErrorMessage = "La contraseña es requerida")]
        public string password {get; set;}
        [Required(ErrorMessage = "El tipo de identificacion es requerida")]
        public string tipo_Identificacion {get; set;}
        [Required(ErrorMessage = "la identificacion es requerida")]
        public string identificacion{get; set;}
        [Required(ErrorMessage = "Los nombres son requeridos")]
        public string nombres{get; set;}
        [Required(ErrorMessage = "El primer Apellido es requerido")]
        public string primer_Apellido{get; set;}
        [Required(ErrorMessage = "El segundo Apellido es requerido")]
        public string segundo_Apellido{get; set;}
        [Required(ErrorMessage = "El numero celular es requerido")]
        public string numero_Celular{get; set;}
        [Required(ErrorMessage = "El correo es requerido")]
        public string correo{get; set;}
        [Required(ErrorMessage = "El departamento es requerido")]
        public string departamento{get; set;}
        [Required(ErrorMessage = "El municipio es requerido")]
        public string municipio{get; set;}
        [Required(ErrorMessage = "La direccion es requerida")]
        public string direccion{get; set;}
        [Required(ErrorMessage = "El sexo es requerido")]
        public string sexo{get; set;}
        [Required(ErrorMessage = "El programa es requerido")]
        public string programa{get; set;}
        [Required(ErrorMessage = "La facultad es requerida")]
        public string facultad{get; set;}
        [Required(ErrorMessage = "Se solita saber si tiene o no un titulo profecional")]
        public string profesional{get; set;}
        [Required(ErrorMessage = "Se solita saber si tiene o no un titulo de especializacion")]
        public string especializacion{get; set;}
        [Required(ErrorMessage = "Se solita saber si tiene o no un titulo de maestria")]
        public string maestria{get; set;}
        [Required(ErrorMessage = "Se solita saber si tiene o no un titulo de doctorado")]
        public string doctorado{get; set;}
    
    }
    
    public class DocenteViewModel : DocenteInputModel
    {
        public DocenteViewModel()
        {

        }
        public DocenteViewModel(Docente docente)
        {
            
            this.nombre_Usuario = docente.nombre_Usuario;
            this.tipo_Usuario = docente.tipo_Usuario;
            this.password = docente.password;
            this.tipo_Identificacion = docente.tipo_Identificacion;
            this.identificacion = docente.identificacion;
            this.nombres = docente.nombres;
            this.primer_Apellido = docente.primer_Apellido;
            this.segundo_Apellido = docente.segundo_Apellido;
            this.numero_Celular = docente.numero_Celular;
            this.correo = docente.correo;
            this.departamento = docente.departamento;
            this.municipio = docente.municipio;
            this.direccion = docente.direccion;
            this.sexo = docente.sexo;
            this.programa = docente.programa;
            this.facultad = docente.facultad;
            this.profesional = docente.profesional;
            this.especializacion = docente.especializacion;
            this.maestria = docente.maestria;
            this.doctorado = docente.doctorado;

        }
    }
}