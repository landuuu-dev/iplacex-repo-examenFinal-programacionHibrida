import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ObjetosPerdidos, Objeto } from '../service/appLogica/objetos-perdidos';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonFabButton, IonIcon } from '@ionic/angular/standalone';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonFabButton, IonIcon]
})
export class HomePage {
  objetos: Objeto[] = [];

  constructor(private router: Router, private objetosPerdidos: ObjetosPerdidos) {}

  ionViewWillEnter() {
    this.objetos = this.objetosPerdidos.getObjetos();
  }

  irAFormFotos() {
    this.router.navigate(['/form-fotos']);
  }
}
