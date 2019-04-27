import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueprintElementDetailComponent } from './blueprint-element-detail.component';

describe('BlueprintElementDetailComponent', () => {
  let component: BlueprintElementDetailComponent;
  let fixture: ComponentFixture<BlueprintElementDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlueprintElementDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlueprintElementDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
