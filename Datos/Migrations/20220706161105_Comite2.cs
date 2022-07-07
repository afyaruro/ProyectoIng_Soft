using Microsoft.EntityFrameworkCore.Migrations;

namespace Datos.Migrations
{
    public partial class Comite2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "doctorado",
                table: "docentes",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "especializacion",
                table: "docentes",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "maestria",
                table: "docentes",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "profesional",
                table: "docentes",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "doctorado",
                table: "docentes");

            migrationBuilder.DropColumn(
                name: "especializacion",
                table: "docentes");

            migrationBuilder.DropColumn(
                name: "maestria",
                table: "docentes");

            migrationBuilder.DropColumn(
                name: "profesional",
                table: "docentes");
        }
    }
}
