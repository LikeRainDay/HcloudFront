import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserService} from './user.service';
import {UserData} from '../data/users';

/**
 * des: 服务内容
 * date: 5:20 下午 2020/1/8
 */
const SERVICES = [
  UserService
];

/**
 * des: 数据服务
 * date: 5:22 下午 2020/1/8
 */
const DATA_SERVICES = [
  {provide: UserData, useClass: UserService}
];

/**
 * des: mock模块
 * date: 5:15 下午 2020/1/8
 */
@NgModule({
  providers: [
    ...SERVICES
  ],
  imports: [
    CommonModule
  ]
})
export class MockDataModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MockDataModule,
      providers: [
        ...SERVICES,
        ...DATA_SERVICES
      ]
    } as ModuleWithProviders;
  }
}
