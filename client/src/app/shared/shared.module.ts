import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PagingHeaderComponent } from './paging-header/paging-header.component';
import { PagerComponent } from './pager/pager.component';
import { FormsModule } from '@angular/forms';
//import { CarouselModule } from 'ngx-bootstrap/carousel';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {NgxTruncateTextModule } from 'ngx-truncate-text';



@NgModule({
  declarations: [
    PagingHeaderComponent,
    PagerComponent
  ],
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    FormsModule,
   // CarouselModule.forRoot(),
    IvyCarouselModule,
    NgxTruncateTextModule
  ],
  exports: [
    PaginationModule,
    PagingHeaderComponent,
    PagerComponent,
    FormsModule,
    //CarouselModule,
    IvyCarouselModule,
    NgxTruncateTextModule
  ]
})
export class SharedModule { }
