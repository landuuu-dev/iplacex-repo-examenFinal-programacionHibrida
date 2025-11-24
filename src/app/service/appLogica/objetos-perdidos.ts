import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

export interface Objeto {
  titulo: string;
  descripcion: string;
  foto?: string;
  fechaHora?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ObjetosPerdidos {
  private _storage: Storage | null = null;
  private objetos: Objeto[] = [];

  constructor() {
    this.init();
  }

  async init() {
    const storage = new Storage({ name: '__mydb' });
    this._storage = await storage.create();
    const saved = await this._storage.get('objetos');
    this.objetos = saved || [];
  }

  getObjetos() {
    return this.objetos;
  }

  async agregarObjeto(objeto: Objeto) {
    this.objetos.push(objeto);
    await this._storage?.set('objetos', this.objetos);
  }

  async guardarObjetos(objetos: Objeto[]) {
    this.objetos = objetos;
    await this._storage?.set('objetos', this.objetos);
  }

  async eliminarObjeto(index: number) {
    this.objetos.splice(index, 1);
    await this._storage?.set('objetos', this.objetos);
  }
}
