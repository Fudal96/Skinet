import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared/models/products';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{
product: Product | undefined;


  constructor(private shopService: ShopService, private activatedRoute: ActivatedRoute) { }



  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct() {
    // in order to pass an Id we need to inject ActivatedRoute in the constructor
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    // by adding a + symbol we make an id a number
    if (id) this.shopService.getProduct(+id).subscribe({
      next: product => this.product = product,
      error: error => console.log(error)
    })
  }

}
