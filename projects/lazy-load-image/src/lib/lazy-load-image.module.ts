import { NgModule } from '@angular/core';
import { LazyLoadImageDirective } from './lazy-load-image.directive';
export * from './lazy-load-image.model';
@NgModule({
  declarations: [LazyLoadImageDirective],
  exports: [LazyLoadImageDirective]
})
export class LazyLoadImageModule {}
