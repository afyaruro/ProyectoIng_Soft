import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsDocenteComponent } from './cons-docente.component';

describe('ConsDocenteComponent', () => {
  let component: ConsDocenteComponent;
  let fixture: ComponentFixture<ConsDocenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsDocenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
