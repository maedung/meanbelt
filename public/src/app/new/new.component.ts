import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  NewProduct: any;
  errors = [];
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.NewProduct = {name: "", qty: "", price: ""}
  }
  addproduct(){
    let observable = this._httpService.newproduct(this.NewProduct);
    observable.subscribe((data:any) => {
      console.log("Successfully created!", data);
      if(data.errors){
        this.errors = data.errors;
      }
      else{
        this._router.navigate(['/products'])
      }
    })
  }

}
