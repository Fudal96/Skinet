import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/models/products';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit{
products: Product[] = [];


constructor(private shopService: ShopService) { }


  ngOnInit(): void {
    this.shopService.getProducts().subscribe({
      next: response => this.products = response.data,
      error: error => console.log(error)
    })
  }

}
