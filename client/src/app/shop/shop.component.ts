import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Brand } from '../shared/models/brand';
import { Product } from '../shared/models/products';
import { ShopParams } from '../shared/models/shopParams';
import { SortParams } from '../shared/models/sortParams';
import { Type } from '../shared/models/type';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit{
@ViewChild('search') searchTerm?: ElementRef;
@ViewChild('searchMobile') searchTermMobile?: ElementRef;
products: Product[] = [];
brands: Brand[] = [];
types: Type[] = [];
shopParams = new ShopParams();
sortParams = new SortParams();
sortOptions = [
  {name: 'Alphabetical', value: 'name'},
  {name: 'Price: Low to high', value: 'priceAsc'},
  {name: 'Price: High to low', value: 'priceDesc'},
];
totalCount = 0;


constructor(private shopService: ShopService) { }


  ngOnInit(): void {
    this.getProducts();
    this.getBrands();
    this.getTypes();
  }

  getProducts() {
    this.shopService.getProducts(this.shopParams, this.sortParams).subscribe({
      next: response => {
        this.products = response.data;
        this.shopParams.pageNumber = response.pageIndex;
        this.shopParams.pageSize = response.pageSize;
        this.totalCount = response.count;
      },
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
    this.shopParams.brandId = brandId;
    this.shopParams.pageNumber = 1;
    this.getProducts();
  }

  mobileOnBrandSelected(event: any) {
    this.shopParams.brandId = event.target.value;
    this.shopParams.pageNumber = 1;
    this.getProducts();
  }


  onTypeSelected(typeId: number) {
    this.shopParams.typeId = typeId;
    this.shopParams.pageNumber = 1;
    this.getProducts();
  }

  mobileOnTypeSelected(event: any) {
    this.shopParams.typeId = event.target.value;
    this.shopParams.pageNumber = 1;
    this.getProducts();
  }


  onSortSelected(event: any) {
    this.sortParams.sort = event.target.value;
    this.shopParams.pageNumber = 1;
    this.getProducts();
  }

  onPageChanged(event: any) {
    if (this.shopParams.pageNumber !== event) {
      this.shopParams.pageNumber = event;
      this.getProducts();
    }
  }

  onSearch() {
   this.shopParams.search = this.searchTerm?.nativeElement.value;
   console.log(this.shopParams.pageNumber)
   this.shopParams.pageNumber = 1;
   console.log(this.shopParams.pageNumber)
   this.getProducts();
  }

  onSearchMobile() {
    this.shopParams.search = this.searchTermMobile?.nativeElement.value;
    this.getProducts();
   }

  onReset() {
    if (this.searchTerm) this.searchTerm.nativeElement.value = '';
    this.shopParams = new ShopParams();
    this.getProducts();
  }

  onResetMobile() {
    if (this.searchTermMobile) this.searchTermMobile.nativeElement.value = '';
    this.shopParams = new ShopParams();
    this.getProducts();
  }

}
