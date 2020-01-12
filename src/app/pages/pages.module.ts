import { NgModule } from '@angular/core';
import {PagesRoutingModule} from './pages-routing.module';
import {PagesComponent} from './pages.component';
import {RouterModule} from '@angular/router';
import {ThemeModule} from '../@theme/theme.module';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
  ],
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NgZorroAntdModule,
  ]
})
export class PagesModule { }
