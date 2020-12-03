import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteLayoutModule } from './site-layout/site-layout.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, SiteLayoutModule],
  exports: [SiteLayoutModule],
})
export class CoreModule {}
