import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConexpendituregraphComponent } from './conexpendituregraph.component';

describe('ConexpendituregraphComponent', () => {
  let component: ConexpendituregraphComponent;
  let fixture: ComponentFixture<ConexpendituregraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConexpendituregraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConexpendituregraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
