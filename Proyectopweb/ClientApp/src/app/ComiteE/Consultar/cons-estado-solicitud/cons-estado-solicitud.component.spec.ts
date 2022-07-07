import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsEstadoSolicitudComponent } from './cons-estado-solicitud.component';

describe('ConsEstadoSolicitudComponent', () => {
  let component: ConsEstadoSolicitudComponent;
  let fixture: ComponentFixture<ConsEstadoSolicitudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsEstadoSolicitudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsEstadoSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
