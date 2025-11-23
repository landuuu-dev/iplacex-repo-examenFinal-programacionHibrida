import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormFotosPage } from './form-fotos.page';

describe('FormFotosPage', () => {
  let component: FormFotosPage;
  let fixture: ComponentFixture<FormFotosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFotosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
