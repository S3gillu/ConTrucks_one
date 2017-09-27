import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsignupComponent } from './consignup.component';

describe('ConsignupComponent', () => {
  let component: ConsignupComponent;
  let fixture: ComponentFixture<ConsignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
