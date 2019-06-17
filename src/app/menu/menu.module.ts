import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { AuthorizationModule } from '../authorization/authorization.module';
import { MenuComponent } from './menu.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    AuthorizationModule
  ],
  declarations: [
    MenuComponent
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule { }
