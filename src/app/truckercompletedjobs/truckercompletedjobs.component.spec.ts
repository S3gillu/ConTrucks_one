import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckercompletedjobsComponent } from './truckercompletedjobs.component';

describe('TruckercompletedjobsComponent', () => {
  let component: TruckercompletedjobsComponent;
  let fixture: ComponentFixture<TruckercompletedjobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruckercompletedjobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruckercompletedjobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
