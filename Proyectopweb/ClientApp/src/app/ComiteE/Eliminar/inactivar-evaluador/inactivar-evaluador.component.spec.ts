import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InactivarEvaluadorComponent } from './inactivar-evaluador.component';

describe('InactivarEvaluadorComponent', () => {
  let component: InactivarEvaluadorComponent;
  let fixture: ComponentFixture<InactivarEvaluadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InactivarEvaluadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InactivarEvaluadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
