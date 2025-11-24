import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ObjetosPerdidos, Objeto } from '../service/appLogica/objetos-perdidos';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonFabButton, IonIcon, IonButton } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonFabButton, IonIcon, IonButton
  ]
})
export class HomePage {
  objetos: Objeto[] = [];

  constructor(
    private router: Router,
    private objetosPerdidos: ObjetosPerdidos,
    private alertController: AlertController
  ) {}

  ionViewWillEnter() {
    this.objetos = this.objetosPerdidos.getObjetos();
  }

  irAFormFotos() {
    this.router.navigate(['/form-fotos']);
  }

  async eliminarObjeto(index: number) {
    const alert = await this.alertController.create({
      header: 'Confirmar eliminación',
      message: '¿Deseas eliminar esta publicación?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Eliminar',
          handler: async () => {
            this.objetos.splice(index, 1);
            await this.objetosPerdidos.guardarObjetos(this.objetos);
          }
        }
      ]
    });

    await alert.present();
  }
}
