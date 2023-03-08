import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./pages/alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'action-sheet',
    loadChildren: () => import('./pages/action-sheet/action-sheet.module').then( m => m.ActionSheetPageModule)
  },
  {
    path: 'radio',
    loadChildren: () => import('./pages/radio/radio.module').then( m => m.RadioPageModule)
  },
  {
    path: 'progress-indictarors',
    loadChildren: () => import('./pages/progress-indictarors/progress-indictarors.module').then( m => m.ProgressIndictarorsPageModule)
  },
  {
    path: 'navigation',
    loadChildren: () => import('./pages/navigation/navigation.module').then( m => m.NavigationPageModule)
  },
  {
    path: 'popover',
    loadChildren: () => import('./pages/popover/popover.module').then( m => m.PopoverPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./pages/modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },  {
    path: 'icons',
    loadChildren: () => import('./pages/icons/icons.module').then( m => m.IconsPageModule)
  },
  {
    path: 'item',
    loadChildren: () => import('./pages/item/item.module').then( m => m.ItemPageModule)
  },
  {
    path: 'media',
    loadChildren: () => import('./pages/media/media.module').then( m => m.MediaPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },

<<<<<<< HEAD

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
=======
const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./pages/alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'action-sheet',
    loadChildren: () => import('./pages/action-sheet/action-sheet.module').then( m => m.ActionSheetPageModule)
  },
  {
    path: 'checkbox',
    loadChildren: () => import('./pages/checkbox/checkbox.module').then( m => m.CheckboxPageModule)
  },
  {
    path: 'chip',
    loadChildren: () => import('./pages/chip/chip.module').then( m => m.ChipPageModule)
  },
  {
    path: 'content',
    loadChildren: () => import('./pages/content/content.module').then( m => m.ContentPageModule)
  },
  {
    path: 'date-time',
    loadChildren: () => import('./pages/date-time/date-time.module').then( m => m.DateTimePageModule)
  },
  {
    path: 'floating-action',
    loadChildren: () => import('./pages/floating-action/floating-action.module').then( m => m.FloatingActionPageModule)
  },
  {
    path: 'grid',
    loadChildren: () => import('./pages/grid/grid.module').then( m => m.GridPageModule)
  },
  {
    path: 'infinite-scroll',
    loadChildren: () => import('./pages/infinite-scroll/infinite-scroll.module').then( m => m.InfiniteScrollPageModule)
  },
  {
    path: 'input',
    loadChildren: () => import('./pages/input/input.module').then( m => m.InputPageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./pages/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'accordion',
    loadChildren: () => import('./pages/accordion/accordion.module').then( m => m.AccordionPageModule)
  },
  {
    path: 'badge',
    loadChildren: () => import('./pages/badge/badge.module').then( m => m.BadgePageModule)
  },
  {
    path: 'breadcrumb',
    loadChildren: () => import('./pages/breadcrumb/breadcrumb.module').then( m => m.BreadcrumbPageModule)
  },
  {
    path: 'button',
    loadChildren: () => import('./pages/button/button.module').then( m => m.ButtonPageModule)
  },
  {
    path: 'card',
    loadChildren: () => import('./pages/card/card.module').then( m => m.CardPageModule)
  },
  {
    path: 'select',
    loadChildren: () => import('./pages/select/select.module').then( m => m.SelectPageModule)
  },
  {
    path: 'toast',
    loadChildren: () => import('./pages/toast/toast.module').then( m => m.ToastPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'toggle',
    loadChildren: () => import('./pages/toggle/toggle.module').then( m => m.TogglePageModule)
  },
  {
    path: 'toolbar',
    loadChildren: () => import('./pages/toolbar/toolbar.module').then( m => m.ToolbarPageModule)
  },
  {
    path: 'typography',
    loadChildren: () => import('./pages/typography/typography.module').then( m => m.TypographyPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
>>>>>>> 28ffdd60832f7afd6ec1093816d917b4a3f24184
