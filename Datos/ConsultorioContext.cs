using Microsoft.EntityFrameworkCore;
using Entidad;
namespace Datos
{
    public class ConsultorioContext:DbContext
    {
         public ConsultorioContext(DbContextOptions options) : base(options)
        {
            
        }
        public DbSet<Paciente> pacientes { get; set; }
        public DbSet<Cita> citas { get; set; }
        public DbSet<Psicologo> psicologos { get; set; }
        public DbSet<Evaluacion> evaluaciones { get; set; }
        public DbSet<Tratamiento> tratamientos { get; set; }
        public DbSet<Agenda> agendas { get; set; }

        //Comite Editorial
        public DbSet<Docente> docentes { get; set; }
        public DbSet<Evaluador> evaluadores { get; set; }
    }
}
