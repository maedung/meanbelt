import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: any;
  EditProduct: any;
  validations = [];
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params:Params) => {
      this.id = params['id']
    })
    this.getoneproduct()
  }
  getoneproduct(){
    let id = this.id
    let observable = this._httpService.getproduct(id);
    observable.subscribe(data => {
      console.log("Got a product", data);
      this.EditProduct = data;
    })
  }
  updateproduct(){
    this.validations = [];

    if(this.EditProduct.name.length == 0){
      this.validations.push("Name field is required")
    }
    else if(this.EditProduct.name.length <= 3){
      this.validations.push("Name field requires at least 3 characters")
    }
    if(this.EditProduct.qty.length == 0){
      this.validations.push("Qty field is required")
    }
    else if(this.EditProduct.qty < 0){
      this.validations.push("Qty field can't be negative number")
    }
    if(this.EditProduct.price.length == 0){
      this.validations.push("Price field is required")
    }
    else if(this.EditProduct.price < 0){
      this.validations.push("Price field can't be negative number")
    }
    if(this.validations.length == 0){
      let id = this.id
      let observable = this._httpService.updateproduct(id, this.EditProduct);
      observable.subscribe((data:any) => {
        console.log("Successfully updated", data);
        this._router.navigate(['/products'])
      })
    }
  }
}
