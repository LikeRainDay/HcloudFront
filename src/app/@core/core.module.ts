import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {throwIfAlreadyLoaded} from './module-import-guard';
import {LayoutService} from './utils';
import {MockDataModule} from './mock/mock-data.module';

// 用户相关和权限逻辑待在此处丰富
export const HC_CORE_PROVIDERS = [
  MockDataModule.forRoot().providers,
  LayoutService
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        ...HC_CORE_PROVIDERS,
      ],
    } as ModuleWithProviders;
  }
}
