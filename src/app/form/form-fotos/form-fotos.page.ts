import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonItem, IonInput, IonLabel, IonBackButton, IonButtons, IonIcon } from '@ionic/angular/standalone';
import { Camera, CameraResultType } from '@capacitor/camera';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-fotos',
  templateUrl: './form-fotos.page.html',
  styleUrls: ['./form-fotos.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonItem, IonInput, IonLabel, IonBackButton, IonButtons, IonIcon, CommonModule, FormsModule]
})
export class FormFotosPage {

  titulo: string = '';
  descripcion: string = '';
  foto: string | undefined;

  constructor(private router: Router) {}

  async tomarFoto() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl
    });
    this.foto = image.dataUrl;
  }

  guardarMascota() {
    // Aquí normalmente guardarías en una base de datos o estado global
    console.log({
      titulo: this.titulo,
      descripcion: this.descripcion,
      foto: this.foto
    });
    this.router.navigate(['/']); // vuelve a Home
  }
}
