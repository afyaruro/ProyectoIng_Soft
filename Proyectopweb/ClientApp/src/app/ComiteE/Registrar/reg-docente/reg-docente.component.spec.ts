import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegDocenteComponent } from './reg-docente.component';

describe('RegDocenteComponent', () => {
  let component: RegDocenteComponent;
  let fixture: ComponentFixture<RegDocenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegDocenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
