import { Component, OnInit } from '@angular/core';
import { Brand } from '../shared/models/brand';
import { Product } from '../shared/models/products';
import { Type } from '../shared/models/type';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit{
products: Product[] = [];
brands: Brand[] = [];
types: Type[] = [];
brandIdSelected = 0;
typeIdSelected = 0;
sortSelected = 'name';
sortOptions = [
  {name: 'Alphabetical', value: 'name'},
  {name: 'Price: Low to high', value: 'priceAsc'},
  {name: 'Price: High to low', value: 'priceDesc'},
]


constructor(private shopService: ShopService) { }


  ngOnInit(): void {
    this.getProducts();
    this.getBrands();
    this.getTypes();
  }

  getProducts() {
    this.shopService.getProducts(this.brandIdSelected, this.typeIdSelected, this.sortSelected).subscribe({
      next: response => this.products = response.data,
      error: error => console.log(error)
    })
  }

  getBrands() {
    this.shopService.getBrands().subscribe({
      next: response => this.brands = [{id: 0, name: 'All'}, ...response],
      error: error => console.log(error)
    })
  }

  getTypes() {
    this.shopService.getTypes().subscribe({
      next: response => this.types = [{id: 0, name: 'All'}, ...response],
      error: error => console.log(error)
    })
  }

  onBrandSelected(brandId: number) {
    this.brandIdSelected = brandId;
    this.getProducts();
  }

  mobileOnBrandSelected(event: any) {
    this.brandIdSelected = event.target.value;
    this.getProducts();
  }


  onTypeSelected(typeId: number) {
    this.typeIdSelected = typeId;
    this.getProducts();
  }

  mobileOnTypeSelected(event: any) {
    this.typeIdSelected = event.target.value;
    this.getProducts();
  }



  onSortSelected(event: any) {
    this.sortSelected = event.target.value;
    this.getProducts();
  }

}
