// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DepositComponent } from './deposit.component';
import { WithdrawalComponent } from './withdrawal.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ModalModule } from 'ngx-bootstrap/modal';

// Wallet Routing
import { WalletRoutingModule } from './wallet-routing.module';

@NgModule({
  imports: [
    CommonModule,
    WalletRoutingModule,
    AlertModule.forRoot(),
    ModalModule.forRoot()
  ],
  declarations: [
    DepositComponent,
    WithdrawalComponent,
  ]
})
export class WalletModule { }
