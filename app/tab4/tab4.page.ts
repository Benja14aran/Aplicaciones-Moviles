import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlumnosService, Alumno } from '../services/alumnos.service';  // Importar el servicio y el tipo Alumno

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  alumnos: Alumno[] = [];

  constructor(private menucontroller: MenuController,
              private alumnosService: AlumnosService) {}

  mostrarMenu() {
    this.menucontroller.open('first');
  }

  ngOnInit() {
    this.alumnosService.obtenerAlumnosObservable().subscribe((alumnos: Alumno[]) => {
      this.alumnos = alumnos;
    });
  }

  eliminarAlumno(index: number) {
    this.alumnosService.eliminarAlumno(index); 
  }
}


