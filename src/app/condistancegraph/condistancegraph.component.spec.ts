import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CondistancegraphComponent } from './condistancegraph.component';

describe('CondistancegraphComponent', () => {
  let component: CondistancegraphComponent;
  let fixture: ComponentFixture<CondistancegraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CondistancegraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CondistancegraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
