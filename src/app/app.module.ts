import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NzTableModule} from 'ng-zorro-antd/table';
import {NzDividerModule} from 'ng-zorro-antd/divider';
import { ListusersComponent } from './layout/listusers/listusers.component';
import {HttpClientModule} from '@angular/common/http';
import { UserdetailComponent } from './layout/userdetail/userdetail.component';
import {NzSpinModule} from 'ng-zorro-antd/spin';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NgxSpinnerModule, NgxSpinnerService} from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NzTableModule,
    NzDividerModule,
    NzSpinModule,
    NzIconModule,
    NgxSpinnerModule
  ],
  providers: [NgxSpinnerService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
