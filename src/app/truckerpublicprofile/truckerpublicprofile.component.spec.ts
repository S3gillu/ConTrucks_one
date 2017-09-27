import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckerpublicprofileComponent } from './truckerpublicprofile.component';

describe('TruckerpublicprofileComponent', () => {
  let component: TruckerpublicprofileComponent;
  let fixture: ComponentFixture<TruckerpublicprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruckerpublicprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruckerpublicprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
