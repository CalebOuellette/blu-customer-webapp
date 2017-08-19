import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversalDeliveryComponent } from './universal-delivery.component';

describe('UniversalDeliveryComponent', () => {
  let component: UniversalDeliveryComponent;
  let fixture: ComponentFixture<UniversalDeliveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversalDeliveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversalDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
