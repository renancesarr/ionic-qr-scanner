import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LerPlacaVeiculoPage } from './ler-placa-veiculo.page';

const routes: Routes = [
  {
    path: '',
    component: LerPlacaVeiculoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LerPlacaVeiculoPageRoutingModule {}
