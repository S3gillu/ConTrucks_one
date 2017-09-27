import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckerpersonalprofileComponent } from './truckerpersonalprofile.component';

describe('TruckerpersonalprofileComponent', () => {
  let component: TruckerpersonalprofileComponent;
  let fixture: ComponentFixture<TruckerpersonalprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruckerpersonalprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruckerpersonalprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
