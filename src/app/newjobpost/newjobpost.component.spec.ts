import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewjobpostComponent } from './newjobpost.component';

describe('NewjobpostComponent', () => {
  let component: NewjobpostComponent;
  let fixture: ComponentFixture<NewjobpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewjobpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewjobpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
