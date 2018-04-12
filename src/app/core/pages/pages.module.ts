import { NgModule } from '@angular/core';

import { PagesRoutingModule } from './pages-routing.module';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';

const PAGES = [
  AboutComponent, ContactComponent, ErrorComponent, HomeComponent
];

@NgModule({
  imports: [ PagesRoutingModule ],
  exports: PAGES,
  declarations: PAGES
})
export class PagesModule {}
