import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckerunitstatusComponent } from './truckerunitstatus.component';

describe('TruckerunitstatusComponent', () => {
  let component: TruckerunitstatusComponent;
  let fixture: ComponentFixture<TruckerunitstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruckerunitstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruckerunitstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
