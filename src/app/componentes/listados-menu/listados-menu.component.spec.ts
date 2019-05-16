import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadosMenuComponent } from './listados-menu.component';

describe('ListadosMenuComponent', () => {
  let component: ListadosMenuComponent;
  let fixture: ComponentFixture<ListadosMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadosMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadosMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
