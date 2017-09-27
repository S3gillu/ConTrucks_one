import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckerrecommendationstatusComponent } from './truckerrecommendationstatus.component';

describe('TruckerrecommendationstatusComponent', () => {
  let component: TruckerrecommendationstatusComponent;
  let fixture: ComponentFixture<TruckerrecommendationstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruckerrecommendationstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruckerrecommendationstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
