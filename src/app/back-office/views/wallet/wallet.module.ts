// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DepositComponent } from './deposit.component';
import { WithdrawalComponent } from './withdrawal.component';

// Wallet Routing
import { WalletRoutingModule } from './wallet-routing.module';

@NgModule({
  imports: [
    CommonModule,
    WalletRoutingModule
  ],
  declarations: [
    DepositComponent,
    WithdrawalComponent
  ]
})
export class WalletModule { }
