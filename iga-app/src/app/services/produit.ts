import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Produit {
    produits : any;

  constructor(private http: HttpClient) { }

  getAllProducts(){
    return this.http.get("http://localhost:8083/products");
    }

  deleteProduct(produit: any){
    return this.http.get("http://localhost:8083/products/"+produit.id);
    }
}

