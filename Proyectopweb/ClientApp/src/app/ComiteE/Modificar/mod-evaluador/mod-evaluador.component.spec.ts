import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModEvaluadorComponent } from './mod-evaluador.component';

describe('ModEvaluadorComponent', () => {
  let component: ModEvaluadorComponent;
  let fixture: ComponentFixture<ModEvaluadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModEvaluadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModEvaluadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
