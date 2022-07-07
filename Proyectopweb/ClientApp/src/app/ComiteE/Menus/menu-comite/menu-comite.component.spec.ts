import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComiteComponent } from './menu-comite.component';

describe('MenuComiteComponent', () => {
  let component: MenuComiteComponent;
  let fixture: ComponentFixture<MenuComiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuComiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
