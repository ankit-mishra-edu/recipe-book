import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondaryNavbarComponent } from './secondary-navbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SecondaryNavbarComponent],
  imports: [RouterModule, CommonModule],
  exports: [SecondaryNavbarComponent],
})
export class SecondaryNavbarModule {}
