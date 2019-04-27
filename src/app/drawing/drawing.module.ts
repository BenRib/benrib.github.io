import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DrawingContainerComponent } from './drawing-container/drawing-container.component';
import { DrawingElementComponent } from './drawing-element/drawing-element.component';

@NgModule({
  declarations: [
    DrawingContainerComponent,
    DrawingElementComponent
  ],
  imports: [
    CommonModule,
    DragDropModule
  ],
  exports: [
    DrawingContainerComponent
  ]
})
export class DrawingModule { }
