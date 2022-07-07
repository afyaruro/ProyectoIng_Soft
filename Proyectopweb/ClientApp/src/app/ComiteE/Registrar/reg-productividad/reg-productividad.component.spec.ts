import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegProductividadComponent } from './reg-productividad.component';

describe('RegProductividadComponent', () => {
  let component: RegProductividadComponent;
  let fixture: ComponentFixture<RegProductividadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegProductividadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegProductividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
