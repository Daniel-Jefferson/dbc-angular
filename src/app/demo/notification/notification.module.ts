import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationRoutingModule } from './notification-routing.module';
import {NotificationComponent} from './notification.component';
import {SharedModule} from '../../theme/shared/shared.module';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [NotificationComponent],
  imports: [
    CommonModule,
    NotificationRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module
  ]
})
export class NotificationModule { }
