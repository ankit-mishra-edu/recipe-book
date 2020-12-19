import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteLayoutComponent } from './site-layout.component';
import { MainContentModule } from './main-content/main-content.module';
import { FooterModule } from './footer/footer/footer.module';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SiteLayoutComponent, HeaderComponent],
  imports: [CommonModule, MainContentModule, FooterModule, SharedModule],
  exports: [SiteLayoutComponent, MainContentModule, FooterModule],
})
export class SiteLayoutModule {}
