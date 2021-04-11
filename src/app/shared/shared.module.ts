import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadImageModule } from 'lazy-load-image';

@NgModule({
  declarations: [],
  imports: [CommonModule, LazyLoadImageModule],
  exports: [CommonModule, LazyLoadImageModule]
})
export class SharedModule {}
