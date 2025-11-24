import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ObjetosPerdidos, Objeto } from '../service/appLogica/objetos-perdidos';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonFabButton, IonIcon, IonButton } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonButton, 
  CommonModule,    // para *ngIf y *ngFor
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon
]

})



export class HomePage {
  objetos: Objeto[] = [];

  constructor(private router: Router, private objetosPerdidos: ObjetosPerdidos) {}

  async ionViewWillEnter() {
    this.objetos = await this.objetosPerdidos.getObjetos();
  }

  irAFormFotos() {
    this.router.navigate(['/form-fotos']);
  }

  // 🔥 Función para eliminar un objeto
  async eliminarObjeto(index: number) {
    const confirmado = confirm('¿Estás seguro de eliminar esta publicación?');
    if (!confirmado) return;

    await this.objetosPerdidos.eliminarObjeto(index);
    this.objetos = await this.objetosPerdidos.getObjetos(); // actualizar lista
  }
}
