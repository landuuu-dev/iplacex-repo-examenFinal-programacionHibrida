
import { Injectable } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { CapacitorSQLite, SQLiteDBConnection, SQLiteConnection } from '@capacitor-community/sqlite';

@Injectable({
  providedIn: 'root',
})
export class SqlDB {
  sqlite: SQLiteConnection;
  db: SQLiteDBConnection | undefined;

  constructor() {
    this.sqlite = new SQLiteConnection(CapacitorSQLite);

    if (Capacitor.getPlatform() === 'web') {
      // inicializar jeep-sqlite web
      if (!customElements.get('jeep-sqlite')) {
        const jeep = (window as any).JeepSqlite;
        customElements.define('jeep-sqlite', jeep);
      }
      this.sqlite.initWebStore().then(() => {
        console.log('SQLite Web initialized');
      });
    }
  }

  async openDb(dbName: string) {
    if (!this.db) {
      this.db = await this.sqlite.createConnection(dbName, false, 'no-encryption', 1, false);
      await this.db.open();
    }
    return this.db;
  }
}
