import { Component, Input } from '@angular/core';
import { Product } from 'src/app/shared/models/products';

@Component({
  selector: 'app-mobile-product-item',
  templateUrl: './mobile-product-item.component.html',
  styleUrls: ['./mobile-product-item.component.scss']
})
export class MobileProductItemComponent {
  @Input() product: Product | undefined;

}
