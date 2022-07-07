import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegEvaluadorComponent } from './reg-evaluador.component';

describe('RegEvaluadorComponent', () => {
  let component: RegEvaluadorComponent;
  let fixture: ComponentFixture<RegEvaluadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegEvaluadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegEvaluadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
