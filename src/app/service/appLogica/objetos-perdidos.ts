import { Injectable } from '@angular/core';

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
  private objetos: Objeto[] = [];

  getObjetos() {
    return this.objetos;
  }

  agregarObjeto(objeto: Objeto) {
    this.objetos.push(objeto);
  }

  eliminarObjeto(index: number) {
    this.objetos.splice(index, 1); // elimina 1 elemento en la posición index
  }
}
