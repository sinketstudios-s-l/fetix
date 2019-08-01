import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [ 
  {
    path: '',
    component: TabsPage,
    children: [
      
  { path: 'tab1', loadChildren: '../tab1/tab1.module#Tab1PageModule' },
  { path: 'tab2', loadChildren: '../tab2/tab2.module#Tab2PageModule' },
  { path: 'tab3', loadChildren: '../tab3/tab3.module#Tab3PageModule' },
  { path: 'chat', loadChildren: '../chat/chat.module#ChatPageModule' },
  { path: 'profile', loadChildren: '../profile/profile.module#ProfilePageModule' }
  
 
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
