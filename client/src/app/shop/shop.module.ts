import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { MobileProductItemComponent } from './mobile-product-item/mobile-product-item.component';



@NgModule({
  declarations: [
    ShopComponent,
    ProductItemComponent,
    MobileProductItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ShopComponent
  ]
})
export class ShopModule { }
