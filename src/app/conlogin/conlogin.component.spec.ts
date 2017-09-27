import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConloginComponent } from './conlogin.component';

describe('ConloginComponent', () => {
  let component: ConloginComponent;
  let fixture: ComponentFixture<ConloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
