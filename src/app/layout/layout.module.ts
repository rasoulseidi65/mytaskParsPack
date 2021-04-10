import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LayoutRoutingModule} from './layout-routing.module';
import {UserdetailComponent} from './userdetail/userdetail.component';
import {ListusersComponent} from './listusers/listusers.component';
import {NzTableModule} from 'ng-zorro-antd/table';
import {NzDividerModule} from 'ng-zorro-antd/divider';
import {NzSpinModule} from 'ng-zorro-antd/spin';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NgxSpinnerModule} from 'ngx-spinner';


@NgModule({
  declarations: [UserdetailComponent, ListusersComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    NzTableModule,
    NzDividerModule,
    NzSpinModule,
    NzIconModule,
    NgxSpinnerModule

  ],
  exports: [UserdetailComponent, ListusersComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LayoutModule {
}
