import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarProductividadComponent } from './eliminar-productividad.component';

describe('EliminarProductividadComponent', () => {
  let component: EliminarProductividadComponent;
  let fixture: ComponentFixture<EliminarProductividadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarProductividadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarProductividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
