import { NgModule } from '@angular/core';

import { SiteRoutingModule } from './site-routing.module';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const SITE_COMPONENTS = [
  HomeComponent, AboutComponent, ContactComponent
];

@NgModule({
  imports: [ SiteRoutingModule ],
  exports: SITE_COMPONENTS,
  declarations: SITE_COMPONENTS
})
export class SiteModule {}
