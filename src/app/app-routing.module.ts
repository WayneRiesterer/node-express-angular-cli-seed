import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const APP_ROUTES: Routes = [
  { path: '', loadChildren: 'app/core/pages/pages.module#PagesModule' },
  { path: '**', redirectTo: 'error' }
];

@NgModule({
  imports: [ RouterModule.forRoot(
    APP_ROUTES, { preloadingStrategy: PreloadAllModules }
  )],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
