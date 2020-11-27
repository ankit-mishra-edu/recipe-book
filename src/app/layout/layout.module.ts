import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryNavbarModule } from './header/primary-navbar/primary-navbar.module';
import { SecondaryNavbarModule } from './header/secondary-navbar/secondary-navbar.module';
import { LayoutComponent } from './layout.component';
import { FooterModule } from './footer/footer/footer.module';
import { MainContentModule } from './content/main-content/main-content.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, PrimaryNavbarModule, SecondaryNavbarModule, FooterModule, MainContentModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
