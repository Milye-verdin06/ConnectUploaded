import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumsComponent } from './breadcrums/breadcrums.component';
import { HeadbarComponent } from './headbar/headbar.component';

@NgModule({
  declarations: [SidebarComponent, HeadbarComponent, BreadcrumsComponent],

  exports:[SidebarComponent, HeadbarComponent, BreadcrumsComponent],
  imports: [CommonModule],
})
export class SharedModule {}
