import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageRoutingModule,
<<<<<<< HEAD
    ComponentsModule
=======
    ComponentsModule 
>>>>>>> 28ffdd60832f7afd6ec1093816d917b4a3f24184
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
