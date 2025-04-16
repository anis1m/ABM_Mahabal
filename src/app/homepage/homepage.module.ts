import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { GoalsComponent } from './goals/goals.component';
import { GoalsModule } from './goals/goals.module';
import { FeaturesComponent } from './features/features.component';
import { FooterComponent } from './footer/footer.component';
import { HomepagecommonComponent } from './homepagecommon/homepagecommon.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavbarComponent,
    HeroComponent,
    GoalsComponent,
    FeaturesComponent,
    FooterComponent,
    HomepagecommonComponent,
  ],
  imports: [CommonModule, GoalsModule, RouterModule],
  exports: [HomepagecommonComponent],
})
export class HomepageModule {}
