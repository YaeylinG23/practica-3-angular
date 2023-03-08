import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgressIndictarorsPage } from './progress-indictarors.page';

const routes: Routes = [
  {
    path: '',
    component: ProgressIndictarorsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgressIndictarorsPageRoutingModule {}
