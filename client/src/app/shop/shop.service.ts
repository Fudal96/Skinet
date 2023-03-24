import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Brand } from '../shared/models/brand';
import { Type } from '../shared/models/type';
import { Pagination } from '../shared/models/pagination';
import { Product } from '../shared/models/products';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) { }


  getProducts(brandId?: number, typeId?: number, sort?: string) {
    let params = new HttpParams();

    if (brandId != 0) params = params.append('brandId', brandId!);
    if (typeId != 0) params = params.append('typeId', typeId!);
    if (sort) params = params.append('sort', sort);

    return this.http.get<Pagination<Product[]>>(this.baseUrl + 'products', {params});
  }

  getBrands() {
    return this.http.get<Brand[]>(this.baseUrl + 'products/brands');
  }

  getTypes() {
    return this.http.get<Type[]>(this.baseUrl + 'products/types');
  }

}