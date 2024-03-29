import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuyCryptoPageRoutingModule } from './buy-crypto-routing.module';

import { BuyCryptoPage } from './buy-crypto.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuyCryptoPageRoutingModule,Ng2SearchPipeModule
  ],
  declarations: [BuyCryptoPage]
})
export class BuyCryptoPageModule {}
