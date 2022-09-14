import { NgModule } from '@angular/core';
import { NbCardModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    MatSliderModule
  ],
  declarations: [
    DashboardComponent,
  ],
})
export class DashboardModule { }
