import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckerdashboardComponent } from './truckerdashboard.component';

describe('TruckerdashboardComponent', () => {
  let component: TruckerdashboardComponent;
  let fixture: ComponentFixture<TruckerdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruckerdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruckerdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
