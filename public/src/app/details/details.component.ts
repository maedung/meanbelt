import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id: any;
  oneproduct: any;
  errors: any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.oneproduct = {name: "", qty: "", price: ""}
    this.errors = ""
    this._route.params.subscribe((params:Params) => {
      this.id = params['id']
    })
    this.getoneproduct();
  }
  getoneproduct(){
    let id = this.id
    let observable = this._httpService.getproduct(id);
    observable.subscribe(data => {
      console.log("Got a product", data);
      this.oneproduct = data;
    })
  }
  deleteproduct(){
    let id = this.id
    if(this.oneproduct.qty == 0){
      let observable = this._httpService.removeproduct(id)
      observable.subscribe(data => {
        console.log("Successfully deleted", data);
        this._router.navigate(['/products'])
      })
    }
    else{
      this.errors = "To delete a product, the Qty must be 0"
    }
  }
}