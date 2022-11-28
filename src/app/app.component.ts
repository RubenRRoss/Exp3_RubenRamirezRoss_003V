import { Component } from '@angular/core';

interface Componente{

  icon: string;
  name: string;
  redirecTo: string;

}


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}


  componentes : Componente[] = [
    {
      icon: 'home-outline',
      name: 'Inicio',
      redirecTo: '/inicio'
    },
    {
      icon: 'log-in-outline',
      name: 'Login Profesor',
      redirecTo: '/loginProfe'
    },
    //{
      //icon: 'book-outline',
      //name: 'Alumno',
      //redirecTo: '/action-sheet'
    //}
    //,
    {
      icon: 'information-circle-outline',
      name: 'Quienes Somos',
      redirecTo: '/card'
    },
    {
      icon: 'person-outline',
      name: 'Página Eleccion',
      redirecTo:'/elegir'
    },
    {
      icon: 'qr-code-outline',
      name: 'Generar QR',
      redirecTo: '/generaQR'
    },
    {
      icon: 'log-in-outline',
      name: 'Login Alumnos',
      redirecTo: '/loginAlumno'
    },
    {
      icon: 'umbrella-outline',
      name: 'Feriados Chile',
      redirecTo: '/apiferiados'
    },
    {
      icon: 'person-circle-outline',
      name: 'Perfil Docente',
      redirecTo: '/perfilprofe'
    },
    {
      icon: 'person-circle-outline',
      name: 'Perfil Alumnos',
      redirecTo: '/perfilAlumno'
    },


  ];



}
