import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConunitgraphComponent } from './conunitgraph.component';

describe('ConunitgraphComponent', () => {
  let component: ConunitgraphComponent;
  let fixture: ComponentFixture<ConunitgraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConunitgraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConunitgraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
