import { Component } from '@angular/core';
import { ObjetosPerdidos } from './service/appLogica/objetos-perdidos';
import { addIcons } from 'ionicons';
import { trash, add, camera } from 'ionicons/icons';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

addIcons({ trash, add, camera });

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor(private objetosPerdidos: ObjetosPerdidos) {
    this.initApp();
  }

  async initApp() {
    await this.objetosPerdidos.getObjetos(); // inicializa Storage
  }
}
