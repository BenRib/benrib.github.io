import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawingElementComponent } from './drawing-element.component';

describe('DrawingElementComponent', () => {
  let component: DrawingElementComponent;
  let fixture: ComponentFixture<DrawingElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawingElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawingElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
