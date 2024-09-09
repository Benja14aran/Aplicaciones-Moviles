import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Alumno {
  nombre: string;
  edad: number | null;
  curso: string;
  asistencia: number | null;
  reprobado: string;
  justificacion: string;
}

@Injectable({
  providedIn: 'root',
})
export class AlumnosService {
  private alumnos: Alumno[] = [];

  private alumnosSubject = new BehaviorSubject<Alumno[]>(this.alumnos);

  constructor() {}

  agregarAlumno(alumno: Alumno) {
    this.alumnos.push(alumno);
    this.alumnosSubject.next(this.alumnos);
  }

  eliminarAlumno(index: number) {
    if (index > -1 && index < this.alumnos.length) {
      this.alumnos.splice(index, 1);  // Elimina el alumno del arreglo
      this.alumnosSubject.next(this.alumnos);  // Notifica la actualización
    }
  }

  obtenerAlumnosObservable() {
    return this.alumnosSubject.asObservable();
  }

  obtenerAlumnos(): Alumno[] {
    return this.alumnos;
  }

  limpiarAlumnos() {
    this.alumnos = [];
    this.alumnosSubject.next(this.alumnos);
  }
}





