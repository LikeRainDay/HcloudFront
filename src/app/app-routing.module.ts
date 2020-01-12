import {NgModule} from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'auth', pathMatch: 'full'},
  {
    path: 'auth',
    loadChildren: () => {
      return import('./auth/auth.module')
        .then(m => m.AuthModule);
    }
  },
  {
    path: 'pages',
    loadChildren: () => {
      return import('./pages/pages.module')
        .then(m => m.PagesModule);
    }
  },
  {path: '**', redirectTo: 'auth'}
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
