import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckeravailablejobsComponent } from './truckeravailablejobs.component';

describe('TruckeravailablejobsComponent', () => {
  let component: TruckeravailablejobsComponent;
  let fixture: ComponentFixture<TruckeravailablejobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruckeravailablejobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruckeravailablejobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
