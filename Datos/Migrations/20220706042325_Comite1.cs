using Microsoft.EntityFrameworkCore.Migrations;

namespace Datos.Migrations
{
    public partial class Comite1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "docentes",
                columns: table => new
                {
                    nombre_Usuario = table.Column<string>(nullable: false),
                    tipo_Usuario = table.Column<string>(nullable: true),
                    password = table.Column<string>(nullable: true),
                    tipo_Identificacion = table.Column<string>(nullable: true),
                    identificacion = table.Column<string>(nullable: true),
                    nombres = table.Column<string>(nullable: true),
                    primer_Apellido = table.Column<string>(nullable: true),
                    segundo_Apellido = table.Column<string>(nullable: true),
                    numero_Celular = table.Column<string>(nullable: true),
                    correo = table.Column<string>(nullable: true),
                    departamento = table.Column<string>(nullable: true),
                    municipio = table.Column<string>(nullable: true),
                    direccion = table.Column<string>(nullable: true),
                    sexo = table.Column<string>(nullable: true),
                    programa = table.Column<string>(nullable: true),
                    facultad = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_docentes", x => x.nombre_Usuario);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "docentes");
        }
    }
}
