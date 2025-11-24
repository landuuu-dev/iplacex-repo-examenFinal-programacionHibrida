import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { BehaviorSubject } from 'rxjs';

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
  private _storage!: Storage;
  private objetos: Objeto[] = [];
  private storageReady: Promise<void>;

  // BehaviorSubject para emitir cambios en la lista
  public objetos$ = new BehaviorSubject<Objeto[]>([]);

  constructor(private storage: Storage) {
    this.storageReady = this.init();
  }

  private async init() {
    this._storage = await this.storage.create();
    const saved = await this._storage.get('objetos');
    this.objetos = saved || [];
    this.objetos$.next(this.objetos); // emitir lista inicial
  }

  private async ensureReady() {
    await this.storageReady;
  }

  async getObjetos(): Promise<Objeto[]> {
    await this.ensureReady();
    return this.objetos;
  }

  async agregarObjeto(objeto: Objeto) {
    await this.ensureReady();
    this.objetos.push(objeto);
    await this._storage.set('objetos', this.objetos);
    this.objetos$.next(this.objetos); // actualizar BehaviorSubject
  }

  async guardarObjetos(objetos: Objeto[]) {
    await this.ensureReady();
    this.objetos = objetos;
    await this._storage.set('objetos', this.objetos);
    this.objetos$.next(this.objetos); // actualizar BehaviorSubject
  }

  async eliminarObjeto(index: number) {
    await this.ensureReady();
    this.objetos.splice(index, 1);
    await this._storage.set('objetos', this.objetos);
    this.objetos$.next(this.objetos); // actualizar BehaviorSubject
  }
}
