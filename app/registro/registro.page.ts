import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  email:string="";
  pass:string="";
  confpass:string="";


  constructor(private alertcontroller: AlertController, 
              private router:Router) { }

  ngOnInit() {
  }

  async registre(){
    const alert = await this.alertcontroller.create({
      header: 'Cuenta Creada con Existo',
      mode:'ios',
      buttons: [
        {
          text: 'Ingresar',
          role: 'confirm',
          handler: () => {
            console.log('Datos enviados')
            this.router.navigate(['/comienzo'])
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
    this.confpass="";
  }
}

