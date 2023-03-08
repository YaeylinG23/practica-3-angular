import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgressIndictarorsPageRoutingModule } from './progress-indictarors-routing.module';

import { ProgressIndictarorsPage } from './progress-indictarors.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgressIndictarorsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ProgressIndictarorsPage]
})
export class ProgressIndictarorsPageModule {}
