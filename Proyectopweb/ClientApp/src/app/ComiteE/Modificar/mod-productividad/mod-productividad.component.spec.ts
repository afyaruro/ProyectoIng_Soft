import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModProductividadComponent } from './mod-productividad.component';

describe('ModProductividadComponent', () => {
  let component: ModProductividadComponent;
  let fixture: ComponentFixture<ModProductividadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModProductividadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModProductividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
