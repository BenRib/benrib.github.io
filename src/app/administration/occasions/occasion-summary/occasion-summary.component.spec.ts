import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OccasionSummaryComponent } from './occasion-summary.component';

describe('OccasionSummaryComponent', () => {
  let component: OccasionSummaryComponent;
  let fixture: ComponentFixture<OccasionSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OccasionSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OccasionSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
