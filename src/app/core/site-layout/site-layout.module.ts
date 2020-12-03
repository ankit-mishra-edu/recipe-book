import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteLayoutComponent } from './site-layout.component';
import { PrimaryNavbarModule } from './header/primary-navbar/primary-navbar.module';
import { SecondaryNavbarModule } from './header/secondary-navbar/secondary-navbar.module';
import { MainContentModule } from './main-content/main-content.module';
import { FooterModule } from './footer/footer/footer.module';

@NgModule({
  declarations: [SiteLayoutComponent],
  imports: [
    CommonModule,
    PrimaryNavbarModule,
    SecondaryNavbarModule,
    MainContentModule,
    FooterModule,
  ],
  exports: [
    SiteLayoutComponent,
    PrimaryNavbarModule,
    SecondaryNavbarModule,
    MainContentModule,
    FooterModule,
  ],
})
export class SiteLayoutModule {}
