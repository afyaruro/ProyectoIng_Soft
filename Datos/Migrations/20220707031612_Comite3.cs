using Microsoft.EntityFrameworkCore.Migrations;

namespace Datos.Migrations
{
    public partial class Comite3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "evaluadores",
                columns: table => new
                {
                    nombre_Usuario = table.Column<string>(nullable: false),
                    tipo_Usuario = table.Column<string>(nullable: true),
                    password = table.Column<string>(nullable: true),
                    nombres = table.Column<string>(nullable: true),
                    apellidos = table.Column<string>(nullable: true),
                    tipo_identificacion = table.Column<string>(nullable: true),
                    identificacion = table.Column<string>(nullable: true),
                    sexo = table.Column<string>(nullable: true),
                    correo = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_evaluadores", x => x.nombre_Usuario);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "evaluadores");
        }
    }
}
