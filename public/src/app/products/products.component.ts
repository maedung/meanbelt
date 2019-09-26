import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  AllProducts: any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.allproducts();
  }
  allproducts(){
    let observable = this._httpService.getProducts();
    observable.subscribe(data => {
      console.log("Got All Products", data);
      this.AllProducts = data;
    })
  }

}
