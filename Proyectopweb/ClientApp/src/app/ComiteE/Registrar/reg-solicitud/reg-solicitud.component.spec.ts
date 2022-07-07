import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegSolicitudComponent } from './reg-solicitud.component';

describe('RegSolicitudComponent', () => {
  let component: RegSolicitudComponent;
  let fixture: ComponentFixture<RegSolicitudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegSolicitudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
