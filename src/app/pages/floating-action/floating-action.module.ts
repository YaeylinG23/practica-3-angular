import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FloatingActionPageRoutingModule } from './floating-action-routing.module';

import { FloatingActionPage } from './floating-action.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FloatingActionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FloatingActionPage]
})
export class FloatingActionPageModule {}
