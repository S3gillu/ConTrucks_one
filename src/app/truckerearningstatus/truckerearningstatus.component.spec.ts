import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckerearningstatusComponent } from './truckerearningstatus.component';

describe('TruckerearningstatusComponent', () => {
  let component: TruckerearningstatusComponent;
  let fixture: ComponentFixture<TruckerearningstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruckerearningstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruckerearningstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
