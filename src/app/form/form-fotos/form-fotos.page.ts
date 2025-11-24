import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ObjetosPerdidos, Objeto } from '../../service/appLogica/objetos-perdidos';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonItem, IonInput, IonLabel, IonBackButton, IonButtons, IonIcon } from '@ionic/angular/standalone';
import { Camera, CameraResultType } from '@capacitor/camera';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-form-fotos',
  templateUrl: './form-fotos.page.html',
  styleUrls: ['./form-fotos.page.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule,
    IonHeader, IonToolbar, IonTitle, IonContent, IonButton,
    IonItem, IonInput, IonLabel, IonBackButton, IonButtons, IonIcon, DatePipe
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
    if (this.titulo.length < 5) return alert('Título mínimo 5 caracteres');
    if (this.descripcion.length < 20) return alert('Descripción mínima 20 caracteres');

    const fechaActual = new Date();


    const nuevoObjeto: Objeto = {
      titulo: this.titulo,
      descripcion: this.descripcion,
      foto: this.foto,
      fechaHora: fechaActual.toISOString() 

    };

    await this.objetosPerdidos.agregarObjeto(nuevoObjeto);
    this.router.navigate(['/']);
  }
}
