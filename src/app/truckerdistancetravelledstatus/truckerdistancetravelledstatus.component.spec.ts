import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckerdistancetravelledstatusComponent } from './truckerdistancetravelledstatus.component';

describe('TruckerdistancetravelledstatusComponent', () => {
  let component: TruckerdistancetravelledstatusComponent;
  let fixture: ComponentFixture<TruckerdistancetravelledstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruckerdistancetravelledstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruckerdistancetravelledstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
