import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainContentRoutingModule } from './main-content-routing.module';
import { MainContentComponent } from './main-content.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [MainContentComponent],
  imports: [CommonModule, MainContentRoutingModule, SharedModule],
  exports: [MainContentComponent],
})
export class MainContentModule {}
