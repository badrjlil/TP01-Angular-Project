import { Component, OnInit } from '@angular/core';
import { Produit } from '../services/produit';

@Component({
  selector: 'app-produits',
  imports: [],
  templateUrl: './produits.html',
  styleUrl: './produits.css'
})
export class Produits implements OnInit{
  produits : any;

constructor(private produitService : Produit){
  }
ngOnInit(): void{
    this.getAllProducts();
  }

getAllProducts(): void{
  this.produitService.getAllProducts().subscribe({
    next: resp => {
      this.produits = resp;
      },
    error: err => {
      console.log(err)
      }
    });
  }

deleteProduct(produit: any) : void{
  this.produitService.deleteProduct(produit).subscribe(
    {
      next: value => {
        this.getAllProducts();
        },
      error: err =>{
        console.log(err);
        }
      }
    );
  }
}
