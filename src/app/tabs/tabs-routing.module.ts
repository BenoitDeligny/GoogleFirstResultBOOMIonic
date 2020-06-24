import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'ordonnance',
        loadChildren: () => import('../ordonnance/ordonnance.module').then( m => m.OrdonnancePageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'profil',
        loadChildren: () => import('../profil/profil.module').then( m => m.ProfilPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/Ordonnance',
    pathMatch: 'full'

  }
];

// @ts-ignore
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
