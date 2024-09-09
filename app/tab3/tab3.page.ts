import { Component } from '@angular/core';
import { AlumnosService } from '../services/alumnos.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  alumno = {
    nombre: '',
    edad: null,
    curso: '',
    asistencia: null,
    reprobado: '',
    justificacion: ''
  };

  constructor(
    private alumnosService: AlumnosService,
    private menu: MenuController // Inyectamos el controlador del menú
  ) {}
  
  guardarAlumno() {
    this.alumnosService.agregarAlumno(this.alumno);
    alert('Alumno guardado correctamente');
    this.limpiarFormulario();
  }

  limpiarFormulario() {
    this.alumno = {
      nombre: '',
      edad: null,
      curso: '',
      asistencia: null,
      reprobado: '',
      justificacion: ''
    };
  }

  mostrarMenu() {
    this.menu.open();  
  }
}




