import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TatetiCasilleroComponent } from './tateti-casillero.component';

describe('TatetiCasilleroComponent', () => {
  let component: TatetiCasilleroComponent;
  let fixture: ComponentFixture<TatetiCasilleroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TatetiCasilleroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TatetiCasilleroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
