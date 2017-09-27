import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckerawardedjobsComponent } from './truckerawardedjobs.component';

describe('TruckerawardedjobsComponent', () => {
  let component: TruckerawardedjobsComponent;
  let fixture: ComponentFixture<TruckerawardedjobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruckerawardedjobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruckerawardedjobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
