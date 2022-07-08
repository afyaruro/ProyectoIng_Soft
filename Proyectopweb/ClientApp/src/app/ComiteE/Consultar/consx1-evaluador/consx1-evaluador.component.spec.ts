import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Consx1EvaluadorComponent } from './consx1-evaluador.component';

describe('Consx1EvaluadorComponent', () => {
  let component: Consx1EvaluadorComponent;
  let fixture: ComponentFixture<Consx1EvaluadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Consx1EvaluadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Consx1EvaluadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
