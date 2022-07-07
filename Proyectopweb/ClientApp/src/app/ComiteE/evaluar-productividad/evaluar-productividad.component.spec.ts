import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluarProductividadComponent } from './evaluar-productividad.component';

describe('EvaluarProductividadComponent', () => {
  let component: EvaluarProductividadComponent;
  let fixture: ComponentFixture<EvaluarProductividadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluarProductividadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluarProductividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
