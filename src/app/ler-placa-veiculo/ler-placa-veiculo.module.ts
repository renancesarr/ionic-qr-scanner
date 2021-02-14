import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LerPlacaVeiculoPageRoutingModule } from './ler-placa-veiculo-routing.module';

import { LerPlacaVeiculoPage } from './ler-placa-veiculo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LerPlacaVeiculoPageRoutingModule
  ],
  declarations: [LerPlacaVeiculoPage]
})
export class LerPlacaVeiculoPageModule {}
