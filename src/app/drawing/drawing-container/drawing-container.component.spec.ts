import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawingContainerComponent } from './drawing-container.component';

describe('DrawingContainerComponent', () => {
  let component: DrawingContainerComponent;
  let fixture: ComponentFixture<DrawingContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawingContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawingContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
