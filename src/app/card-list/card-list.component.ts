import { Component } from '@angular/core';
import { DUMMY_DATA } from './card-list-dummy-data';
import { LazyLoadOptions } from 'lazy-load-image';
import { DummyData } from './card-list-dummy-data';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent {
  public readonly DUMMY_DATA: DummyData[] = [];
  public readonly lazyLoadOptions: LazyLoadOptions = {
    threshold: [0.5]
  };
  constructor() {
    for (let i = 0; i < 50; i++) {
      this.DUMMY_DATA.push(DUMMY_DATA);
    }
  }
}
