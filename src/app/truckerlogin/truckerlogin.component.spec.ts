import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckerloginComponent } from './truckerlogin.component';

describe('TruckerloginComponent', () => {
  let component: TruckerloginComponent;
  let fixture: ComponentFixture<TruckerloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruckerloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruckerloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
