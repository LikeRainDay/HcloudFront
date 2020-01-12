import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: 'pages', pathMatch: 'full'},
  {
    path: 'pages',
    loadChildren: () => {
      return import('./pages/pages.module')
        .then(m => m.PagesModule);
    }
  },
  {path: '**', redirectTo: 'pages'}
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [
    RouterModule.forRoot(routes, config)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
