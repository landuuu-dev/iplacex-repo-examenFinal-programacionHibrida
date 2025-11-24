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
  imports: [
    CommonModule, // para *ngIf y *ngFor
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonFab,
    IonFabButton,
    IonIcon,
    IonButton
  ]
})
export class HomePage {
  objetos: Objeto[] = [];

  constructor(private router: Router, private objetosPerdidos: ObjetosPerdidos) {}

  // Cargar objetos desde localStorage al entrar a la vista
  ionViewWillEnter() {
    this.objetos = this.objetosPerdidos.getObjetos();
  }

  // Navegar al formulario para agregar objeto
  irAFormFotos() {
    this.router.navigate(['/form-fotos']);
  }

  // Eliminar un objeto por índice
  eliminarObjeto(index: number) {
    const confirmado = confirm('¿Estás seguro de eliminar esta publicación?');
    if (!confirmado) return;

    this.objetosPerdidos.eliminarObjeto(index);
    this.objetos = this.objetosPerdidos.getObjetos(); // refresca la lista
  }
}
