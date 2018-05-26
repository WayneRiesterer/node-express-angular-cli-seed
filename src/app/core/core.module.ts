import { NgModule } from '@angular/core';

import { PagesModule } from './pages/pages.module';
import { UiModule } from './ui/ui.module';

@NgModule({
  exports: [ PagesModule, UiModule ],
})
export class CoreModule {}
