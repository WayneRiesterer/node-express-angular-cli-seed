import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TopnavComponent } from './topnav/topnav.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  imports: [ CommonModule, RouterModule ],
  exports: [ TopnavComponent, SidenavComponent ],
  declarations: [ TopnavComponent, SidenavComponent ]
})
export class NavModule {}
