import { Injectable, signal } from "@angular/core";
import { Product } from "app/products/data-access/product.model";

@Injectable({
  providedIn: "root"
})
export class CartService {
  private readonly _cart = signal<Product[]>([]);
  public readonly cart = this._cart.asReadonly();

  // Ajouter un produit au panier
  public addToCart(product: Product) {
    const currentCart = this._cart();
    const existingProduct = currentCart.find(p => p.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      this._cart.set([...currentCart, { ...product, quantity: 1 }]);
    }
  }

  // Récupérer le panier
  public getCart() {
    return this.cart;
  }
}
