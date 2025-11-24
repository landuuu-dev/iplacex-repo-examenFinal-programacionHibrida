import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ObjetosPerdidos, Objeto } from '../service/appLogica/objetos-perdidos';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonFabButton, IonIcon, IonButton } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { AlertController } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonFabButton, IonIcon, IonButton
  ]
})
export class HomePage implements OnDestroy {
  objetos: Objeto[] = [];
  private sub!: Subscription;

  constructor(
    private router: Router,
    private objetosPerdidos: ObjetosPerdidos,
    private alertController: AlertController
  ) {}

  ionViewWillEnter() {
    this.sub = this.objetosPerdidos.objetos$.subscribe(list => {
      this.objetos = list;
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

  irAFormFotos() {
    this.router.navigate(['/form-fotos']);
  }

  async eliminarObjeto(index: number) {
    const alert = await this.alertController.create({
      header: 'Confirmar eliminación',
      message: '¿Deseas eliminar esta publicación?',
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Eliminar',
          handler: async () => {
            await this.objetosPerdidos.eliminarObjeto(index);
          }
        }
      ]
    });
    await alert.present();
  }
}
