import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comienzo',
  templateUrl: './comienzo.page.html',
  styleUrls: ['./comienzo.page.scss'],
})
export class ComienzoPage implements OnInit {

  email:string="";
  pass:string="";

  constructor(private alertcontroller: AlertController, 
              private router:Router) { }

  ngOnInit() {
  }

  async login(){
    const alert = await this.alertcontroller.create({
      header: 'Bienvenido',
      mode:'ios',
      message: ' '+this.email,
      buttons: [
        {
          text: 'Ingresar',
          role: 'confirm',
          handler: () => {
            this.router.navigate(['/tabs/tab1'])
          },
        },
      ],
    });

    await alert.present();
  }

  async registre(){
    const alert = await this.alertcontroller.create({
      header: 'MyTabs',
      mode:'ios',
      buttons: [
        {
          text: 'Ingresar',
          role: 'confirm',
          handler: () => {
            console.log('Datos enviados');
            this.router.navigate(['/registro'])
            this.limpiar();
          },
        },
      ],
    });

    await alert.present();
  }

  limpiar(){
    this.email="";
    this.pass="";
  }
}
