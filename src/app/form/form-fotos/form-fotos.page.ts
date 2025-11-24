import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ObjetosPerdidos, Objeto } from '../../service/appLogica/objetos-perdidos';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonItem, IonInput, IonLabel, IonBackButton, IonButtons, IonIcon } from '@ionic/angular/standalone';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-form-fotos',
  templateUrl: './form-fotos.page.html',
  styleUrls: ['./form-fotos.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonItem,
    IonInput,
    IonLabel,
    IonBackButton,
    IonButtons,
    IonIcon
  ]
})
export class FormFotosPage {

  titulo: string = '';
  descripcion: string = '';
  foto: string | undefined;

  constructor(private router: Router, private objetosPerdidos: ObjetosPerdidos) {}

  // Tomar foto con la cámara
  async tomarFoto() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl
    });
    this.foto = image.dataUrl;
  }

  // Guardar objeto en localStorage
  guardarObjeto() {
    if (!this.titulo || !this.descripcion) return alert('Completa los campos');

    const fechaActual = new Date();
    const fechaHoraFormateada = fechaActual.toLocaleString(); // ej: 24/11/2025 08:45:00

    const nuevoObjeto: Objeto = {
      titulo: this.titulo,
      descripcion: this.descripcion,
      foto: this.foto,
      fechaHora: fechaHoraFormateada
    };

    this.objetosPerdidos.agregarObjeto(nuevoObjeto);

    // Volver al home
    this.router.navigate(['/']);
  }
}
