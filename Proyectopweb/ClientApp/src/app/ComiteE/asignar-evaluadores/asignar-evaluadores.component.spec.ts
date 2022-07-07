import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarEvaluadoresComponent } from './asignar-evaluadores.component';

describe('AsignarEvaluadoresComponent', () => {
  let component: AsignarEvaluadoresComponent;
  let fixture: ComponentFixture<AsignarEvaluadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignarEvaluadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarEvaluadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
