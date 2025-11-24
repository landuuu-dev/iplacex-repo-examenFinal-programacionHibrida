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
  private storageKey = 'objetosPerdidos';

  // Obtener objetos desde localStorage
  getObjetos(): Objeto[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  // Guardar un nuevo objeto
  agregarObjeto(objeto: Objeto) {
    const objetos = this.getObjetos();
    objetos.push(objeto);
    localStorage.setItem(this.storageKey, JSON.stringify(objetos));
  }

  // Eliminar un objeto
  eliminarObjeto(index: number) {
    const objetos = this.getObjetos();
    objetos.splice(index, 1);
    localStorage.setItem(this.storageKey, JSON.stringify(objetos));
  }
}
