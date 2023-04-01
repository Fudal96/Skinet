import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  products: any[] = [];
  itemsPerSlide = 5;
  singleSlideOffset = false;
  noWrap = false;

  slidesChangeMessage = '';



  constructor(private http: HttpClient) { }

  slides = [
    {image: 'assets/images/hero1.jpg'},
    {image: 'assets/images/hero2.jpg'},
    {image: 'assets/images/hero3.jpg'},
    {image: 'assets/images/hero1.jpg'},
    {image: 'assets/images/hero2.jpg'},
    {image: 'assets/images/hero3.jpg'},
    {image: 'assets/images/hero1.jpg'},
    {image: 'assets/images/hero2.jpg'},
    {image: 'assets/images/hero3.jpg'},
    {image: 'assets/images/hero3.jpg'},

  ];


    ngOnInit(): void {
      this.http.get('https://localhost:5001/api/products?pageSize=10').subscribe({
        next: (response: any) => this.products = response.data,
        error: error => console.log(error),
        complete: () => {
          console.log('request completed');
          console.log('extra statement')
        }
      })
  }

  onSlideRangeChange(indexes: number[]|void): void {
    this.slidesChangeMessage = `Slides have been switched: ${indexes}`;
  }


}
