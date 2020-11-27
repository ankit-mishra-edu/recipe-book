import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondaryNavbarComponent } from './secondary-navbar.component';

@NgModule({
  declarations: [SecondaryNavbarComponent],
  imports: [CommonModule],
  exports: [SecondaryNavbarComponent],
})
export class SecondaryNavbarModule {}
