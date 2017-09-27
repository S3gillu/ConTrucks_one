import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContoptruckersComponent } from './contoptruckers.component';

describe('ContoptruckersComponent', () => {
  let component: ContoptruckersComponent;
  let fixture: ComponentFixture<ContoptruckersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContoptruckersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContoptruckersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
