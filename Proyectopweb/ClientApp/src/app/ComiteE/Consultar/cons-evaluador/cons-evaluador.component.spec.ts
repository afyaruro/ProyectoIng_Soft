import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsEvaluadorComponent } from './cons-evaluador.component';

describe('ConsEvaluadorComponent', () => {
  let component: ConsEvaluadorComponent;
  let fixture: ComponentFixture<ConsEvaluadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsEvaluadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsEvaluadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
