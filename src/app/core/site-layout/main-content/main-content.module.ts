import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainContentRoutingModule } from './main-content-routing.module';
import { MainContentComponent } from './main-content.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';

@NgModule({
  declarations: [MainContentComponent, LeftSidebarComponent],
  imports: [CommonModule, MainContentRoutingModule],
  exports: [MainContentComponent, LeftSidebarComponent],
})
export class MainContentModule {}
