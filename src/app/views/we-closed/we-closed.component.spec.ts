import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeClosedComponent } from './we-closed.component';

describe('WeClosedComponent', () => {
  let component: WeClosedComponent;
  let fixture: ComponentFixture<WeClosedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeClosedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeClosedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
