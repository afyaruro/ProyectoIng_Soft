import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuEvaluadorComponent } from './menu-evaluador.component';

describe('MenuEvaluadorComponent', () => {
  let component: MenuEvaluadorComponent;
  let fixture: ComponentFixture<MenuEvaluadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuEvaluadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuEvaluadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
