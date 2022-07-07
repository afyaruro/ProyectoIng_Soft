import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviarCorreccionesComponent } from './enviar-correcciones.component';

describe('EnviarCorreccionesComponent', () => {
  let component: EnviarCorreccionesComponent;
  let fixture: ComponentFixture<EnviarCorreccionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnviarCorreccionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviarCorreccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
