import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscriber } from 'rxjs';
import { BaseComponent, SpinnerTypes } from 'src/app/base/base.component';
import { Product } from 'src/app/contracts/product';
import { HttpClientService } from 'src/app/services/common/http-client.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent extends BaseComponent implements OnInit {

  constructor(spinner:NgxSpinnerService,private httpClientService:HttpClientService) {
    super(spinner)
   }

  ngOnInit(): void {
    this.showSpinner(SpinnerTypes.Cog);
   
    // TEST

    this.httpClientService.get<Product[]>({
      controller:"products"
    }).subscribe(data=>console.log(data));

/*     this.httpClientService.post({
      controller:"products"
    },{
      name : "Kalem",
      stock: 100,
      price : 10,
    }).subscribe(); */

   /*  this.httpClientService.put({
      controller:"products",
    },{
      id:"ae0a1d74-9994-4de2-8427-c58f9faaa352",
      name:"Çok Renkli Defter",
      stock:99,
      price:66
    }).subscribe() */

/*     this.httpClientService.delete({
      controller:"products"
    },"80fbde95-42d3-479e-9ac4-eb6594a213e9").subscribe(); */
  
   /*  this.httpClientService.get({
      baseUrl:"https://jsonplaceholder.typicode.com",
      controller:"posts"
    }).subscribe(data=> console.log(data))
 */

   /*  this.httpClientService.get({
      fullEndPoint:"https://jsonplaceholder.typicode.com/posts"
    }).subscribe(data=> console.log(data)) */
  }

}
