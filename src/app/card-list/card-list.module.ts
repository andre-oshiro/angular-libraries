import { NgModule } from '@angular/core';

import { CardListRoutingModule } from './card-list-routing.module';
import { CardListComponent } from './card-list.component';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CardListComponent],
  imports: [CardListRoutingModule, MatCardModule, SharedModule],
  exports: [SharedModule]
})
export class CardListModule {}
