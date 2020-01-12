import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PagesRoutingModule} from './pages-routing.module';
import {PagesComponent} from './pages.component';
import {TestComponent} from './test/test.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    PagesComponent,
    TestComponent
  ],
  imports: [
    PagesRoutingModule,
    RouterModule,
  ]
})
export class PagesModule { }
