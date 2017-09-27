import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CondashboardComponent } from './condashboard.component';

describe('CondashboardComponent', () => {
  let component: CondashboardComponent;
  let fixture: ComponentFixture<CondashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CondashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CondashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
