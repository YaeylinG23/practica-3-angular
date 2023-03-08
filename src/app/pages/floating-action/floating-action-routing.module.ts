import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FloatingActionPage } from './floating-action.page';

const routes: Routes = [
  {
    path: '',
    component: FloatingActionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FloatingActionPageRoutingModule {}
