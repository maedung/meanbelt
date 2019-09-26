import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
  }
  getProducts(){
    return this._http.get('/products');
  }
  getproduct(id){
    return this._http.get(`/products/${id}`);
  }
  newproduct(NewProduct){
    return this._http.post('/products/new', NewProduct);
  }
  removeproduct(id){
    return this._http.delete(`/products/delete/${id}`);
  }
  updateproduct(id, EditProduct){
    return this._http.put(`/products/edit/${id}`, EditProduct);
  }
}
