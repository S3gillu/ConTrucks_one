import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckerjobapplicationComponent } from './truckerjobapplication.component';

describe('TruckerjobapplicationComponent', () => {
  let component: TruckerjobapplicationComponent;
  let fixture: ComponentFixture<TruckerjobapplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruckerjobapplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruckerjobapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
