import { Component } from '@angular/core';
import { DUMMY_DATA } from './card-list-dummy-data';
import { LazyLoadOptions } from 'lazy-load-image';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent {
  public readonly DUMMY_DATA = DUMMY_DATA;

  public readonly lazyLoadOptions: LazyLoadOptions = {
    threshold: [0.5]
  };
}
