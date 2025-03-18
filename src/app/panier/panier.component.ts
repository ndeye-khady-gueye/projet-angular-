import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from "../products/data-access/products.service";
import { NgForOf, NgIf } from "@angular/common";
import { Router } from "@angular/router";
import { PaginatorModule } from "primeng/paginator";
import { TableModule } from "primeng/table";

@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    PaginatorModule,  // Ajout du module de pagination
    TableModule       // Ajout du module de tableau PrimeNG
  ],
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css'
})
export class PanierComponent implements OnInit {
  ProductsService: ProductsService = inject(ProductsService);
  card!: any;
  
  // Variables pour la pagination
  page: number = 0;
  rows: number = 5; // Nombre d'éléments par page

  ngOnInit() {
    this.card = this.ProductsService.cart;
    this.ProductsService.getCart();
  }

  constructor(private router: Router) { }

  deleteproduct(id: number) {
    this.ProductsService.removeFromCart(id);
  }
}
