import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListusersComponent} from './listusers/listusers.component';
import {UserdetailComponent} from './userdetail/userdetail.component';

const routes: Routes = [
  {
    path: '',
    component: ListusersComponent,
  },
  {
    path: 'detail/:id',
    component: UserdetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
