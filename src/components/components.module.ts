import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';
import { ImgLazyLoadComponent } from './img-lazy-load/img-lazy-load';
import { NumberInputComponent } from './number-input/number-input';
import { ChooseModelComponent } from './choose-model/choose-model';
import { CoustomActionComponent } from './coustom-action/coustom-action'
import { StarComponent } from './star/star'
@NgModule({
  declarations: [ImgLazyLoadComponent, NumberInputComponent, ChooseModelComponent,CoustomActionComponent,StarComponent],
  imports: [IonicModule, CommonModule],
  exports: [ImgLazyLoadComponent, NumberInputComponent, ChooseModelComponent,CoustomActionComponent,StarComponent]
})
export class ComponentsModule { }
