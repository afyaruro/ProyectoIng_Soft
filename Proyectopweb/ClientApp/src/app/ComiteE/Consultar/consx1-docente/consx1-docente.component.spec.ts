import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Consx1DocenteComponent } from './consx1-docente.component';

describe('Consx1DocenteComponent', () => {
  let component: Consx1DocenteComponent;
  let fixture: ComponentFixture<Consx1DocenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Consx1DocenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Consx1DocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
