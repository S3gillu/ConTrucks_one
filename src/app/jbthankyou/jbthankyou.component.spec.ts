import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JbthankyouComponent } from './jbthankyou.component';

describe('JbthankyouComponent', () => {
  let component: JbthankyouComponent;
  let fixture: ComponentFixture<JbthankyouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JbthankyouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JbthankyouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
