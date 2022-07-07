import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsProductividadComponent } from './cons-productividad.component';

describe('ConsProductividadComponent', () => {
  let component: ConsProductividadComponent;
  let fixture: ComponentFixture<ConsProductividadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsProductividadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsProductividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
