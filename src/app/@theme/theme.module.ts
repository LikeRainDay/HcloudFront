import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CapitalizePipe, NumberWithCommasPipe, PluralPipe, RoundPipe, TimingPipe} from './pipes';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import {NgZorroAntdModule, NzLayoutModule} from 'ng-zorro-antd';
import { SliderComponent } from './components/slider/slider.component';


const NB_MODULES = [
];
const COMPONENTS = [
];
const PIPES = [
  CapitalizePipe,
  PluralPipe,
  RoundPipe,
  TimingPipe,
  NumberWithCommasPipe,
];

@NgModule({
  declarations: [...COMPONENTS, ...PIPES, FooterComponent, HeaderComponent, SliderComponent],
  imports: [
    CommonModule,
    ...NB_MODULES,
    NzLayoutModule,
    NgZorroAntdModule
  ],
  exports: [
    CommonModule, ...PIPES, ...COMPONENTS, FooterComponent, HeaderComponent, SliderComponent
  ]
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ThemeModule
    } as ModuleWithProviders;
  }
}
