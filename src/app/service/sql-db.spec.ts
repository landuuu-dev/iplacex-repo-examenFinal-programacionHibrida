import { TestBed } from '@angular/core/testing';

import { SqlDB } from './sql-db';

describe('SqlDB', () => {
  let service: SqlDB;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SqlDB);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
