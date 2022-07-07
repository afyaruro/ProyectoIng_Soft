using System.ComponentModel.DataAnnotations;

//Comite Editorial
namespace Entidad
{
    public class Usuario
    {
        
        [Key]
        public string nombre_Usuario {get; set;}
        public string tipo_Usuario{get; set;}
        public string password {get; set;}
    }
}