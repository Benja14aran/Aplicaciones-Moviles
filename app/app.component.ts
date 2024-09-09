import { Component } from '@angular/core';

interface Menu{
  icon:string;
  redirecTo: string;
  name:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  menu:Menu[]=[
    {
      icon:'enter-outline',
      redirecTo: '/comienzo',
      name:'Login'
    },
    {
      icon:'home-outline',
      redirecTo: '/tabs/tab1',
      name:'Home'
    },
    {
      icon:'person-outline',
      redirecTo: '/tabs/tab2',
      name:'Perfil'
    },
    {
      icon:'server-outline',
      redirecTo: '/tabs/tab3',
      name:'Gestionar'
    },
    {
      icon:'calendar-outline',
      redirecTo: '/tabs/tab4',
      name:'Asistencia'
    },

  ]


  constructor() {}
}
