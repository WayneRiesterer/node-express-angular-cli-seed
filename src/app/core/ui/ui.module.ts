import { NgModule } from '@angular/core';

import { NavModule } from './nav/nav.module';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [ NavModule ],
  exports: [ HeaderComponent, FooterComponent ],
  declarations: [ HeaderComponent, FooterComponent ]
})
export class UiModule {}
