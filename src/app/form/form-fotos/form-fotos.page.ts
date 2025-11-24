import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonItem, IonInput, IonLabel, IonBackButton, IonButtons, IonIcon } from '@ionic/angular/standalone';
import { Camera, CameraResultType } from '@capacitor/camera';
import { Router } from '@angular/router';
import { ObjetosPerdidos } from '../../service/appLogica/objetos-perdidos';


@Component({
  selector: 'app-form-fotos',
  templateUrl: './form-fotos.page.html',
  styleUrls: ['./form-fotos.page.scss'],
  standalone: true,
  imports: [
  CommonModule,    // incluye NgIf, NgFor
  FormsModule,     // para [(ngModel)]
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

  async tomarFoto() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl
    });
    this.foto = image.dataUrl;
  }

  async guardarObjeto() {
  if (!this.titulo || !this.descripcion) return alert('Completa los campos');

  const fechaActual = new Date();
  const fechaHoraFormateada = fechaActual.toLocaleString(); // ejemplo: 24/11/2025 08:45:00

  await this.objetosPerdidos.agregarObjeto({
    titulo: this.titulo,
    descripcion: this.descripcion,
    foto: this.foto,
    fechaHora: fechaHoraFormateada // <-- aquí la asignamos
  });

  this.router.navigate(['/']); // vuelve al home
}

}
