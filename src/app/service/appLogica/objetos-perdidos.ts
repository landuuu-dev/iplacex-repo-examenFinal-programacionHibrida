import { Injectable } from '@angular/core';

export interface Objeto {
  titulo: string;
  descripcion: string;
  foto?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ObjetosPerdidos {
  private objetos: Objeto[] = [];

  getObjetos() {
    return this.objetos;
  }

  agregarObjeto(objeto: Objeto) {
    this.objetos.push(objeto);
  }
  
}

