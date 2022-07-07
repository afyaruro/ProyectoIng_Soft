﻿// <auto-generated />
using System;
using Datos;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Datos.Migrations
{
    [DbContext(typeof(ConsultorioContext))]
    [Migration("20220707031612_Comite3")]
    partial class Comite3
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.3")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Entidad.Agenda", b =>
                {
                    b.Property<int>("idAgenda")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("citaidCita")
                        .HasColumnType("int");

                    b.Property<DateTime>("fechaDeseada")
                        .HasColumnType("datetime2");

                    b.Property<string>("horaCita")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("idCita")
                        .HasColumnType("int");

                    b.Property<string>("idPsicologo")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("psicologoidentificacion")
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("idAgenda");

                    b.HasIndex("citaidCita");

                    b.HasIndex("psicologoidentificacion");

                    b.ToTable("agendas");
                });

            modelBuilder.Entity("Entidad.Cita", b =>
                {
                    b.Property<int>("idCita")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("estado")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("fechaDeseada")
                        .HasColumnType("datetime2");

                    b.Property<string>("horaCita")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("idPaciente")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("nombre")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("nombrePaciente")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("pacienteidentificacion")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("tiposSolicitud")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("idCita");

                    b.HasIndex("pacienteidentificacion");

                    b.ToTable("citas");
                });

            modelBuilder.Entity("Entidad.Docente", b =>
                {
                    b.Property<string>("nombre_Usuario")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("correo")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("departamento")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("direccion")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("doctorado")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("especializacion")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("facultad")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("identificacion")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("maestria")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("municipio")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("nombres")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("numero_Celular")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("password")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("primer_Apellido")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("profesional")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("programa")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("segundo_Apellido")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("sexo")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("tipo_Identificacion")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("tipo_Usuario")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("nombre_Usuario");

                    b.ToTable("docentes");
                });

            modelBuilder.Entity("Entidad.Evaluacion", b =>
                {
                    b.Property<int>("IdEvaluacion")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Psicologoidentificacion")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("analisis")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("consulta")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("diagnostico")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("fecha")
                        .HasColumnType("datetime2");

                    b.Property<string>("identificacionPaciente")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("identificacionPsicologo")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("lugar")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("nombrePaciente")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("nombrePsicologo")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("observacion")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ocupacion")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("pacienteidentificacion")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("pronostico")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("prueba")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("recomendacion")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("IdEvaluacion");

                    b.HasIndex("Psicologoidentificacion");

                    b.HasIndex("pacienteidentificacion");

                    b.ToTable("evaluaciones");
                });

            modelBuilder.Entity("Entidad.Evaluador", b =>
                {
                    b.Property<string>("nombre_Usuario")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("apellidos")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("correo")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("identificacion")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("nombres")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("password")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("sexo")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("tipo_Usuario")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("tipo_identificacion")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("nombre_Usuario");

                    b.ToTable("evaluadores");
                });

            modelBuilder.Entity("Entidad.Paciente", b =>
                {
                    b.Property<string>("identificacion")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Eps")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("apellido")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("correo")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("direccion")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("edad")
                        .HasColumnType("int");

                    b.Property<DateTime>("fechaNacimiento")
                        .HasColumnType("datetime2");

                    b.Property<string>("nombre")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("sexo")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("telefono")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("tipoDocumento")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("identificacion");

                    b.ToTable("pacientes");
                });

            modelBuilder.Entity("Entidad.Psicologo", b =>
                {
                    b.Property<string>("identificacion")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Universidad")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("apellido")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("areaEspecializada")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("correo")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("direccion")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("edad")
                        .HasColumnType("int");

                    b.Property<string>("fechaFinalizacion")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("fechaNacimiento")
                        .HasColumnType("datetime2");

                    b.Property<string>("mesesExperiencia")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("nombre")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("sexo")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("telefono")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("tipoDocumento")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("identificacion");

                    b.ToTable("psicologos");
                });

            modelBuilder.Entity("Entidad.Tratamiento", b =>
                {
                    b.Property<int>("IdTratamiento")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Psicologoidentificacion")
                        .HasColumnType("nvarchar(450)");

                    b.Property<DateTime>("fecha")
                        .HasColumnType("datetime2");

                    b.Property<string>("identificacionPaciente")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("identificacionPsicologo")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("medicacion")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("pacienteidentificacion")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("tratamientoPaso")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("IdTratamiento");

                    b.HasIndex("Psicologoidentificacion");

                    b.HasIndex("pacienteidentificacion");

                    b.ToTable("tratamientos");
                });

            modelBuilder.Entity("Entidad.Agenda", b =>
                {
                    b.HasOne("Entidad.Cita", "cita")
                        .WithMany("agenda")
                        .HasForeignKey("citaidCita");

                    b.HasOne("Entidad.Psicologo", "psicologo")
                        .WithMany("agendas")
                        .HasForeignKey("psicologoidentificacion");
                });

            modelBuilder.Entity("Entidad.Cita", b =>
                {
                    b.HasOne("Entidad.Paciente", "paciente")
                        .WithMany("citas")
                        .HasForeignKey("pacienteidentificacion");
                });

            modelBuilder.Entity("Entidad.Evaluacion", b =>
                {
                    b.HasOne("Entidad.Psicologo", "Psicologo")
                        .WithMany("evaluaciones")
                        .HasForeignKey("Psicologoidentificacion");

                    b.HasOne("Entidad.Paciente", "paciente")
                        .WithMany()
                        .HasForeignKey("pacienteidentificacion");
                });

            modelBuilder.Entity("Entidad.Tratamiento", b =>
                {
                    b.HasOne("Entidad.Psicologo", "Psicologo")
                        .WithMany()
                        .HasForeignKey("Psicologoidentificacion");

                    b.HasOne("Entidad.Paciente", "paciente")
                        .WithMany()
                        .HasForeignKey("pacienteidentificacion");
                });
#pragma warning restore 612, 618
        }
    }
}
