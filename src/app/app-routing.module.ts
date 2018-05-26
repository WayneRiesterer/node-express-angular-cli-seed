import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { ErrorComponent } from './core/pages/error/error.component';

const APP_ROUTES: Routes = [
  { path: '', loadChildren: './site/site.module#SiteModule' },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(
    APP_ROUTES, { preloadingStrategy: PreloadAllModules }
  )],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
