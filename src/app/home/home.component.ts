import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { RouterLink } from "@angular/router";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  standalone: true,
  imports: [CardModule, RouterLink, ButtonModule],
})
export class HomeComponent {
  public readonly appTitle = "SDIAGNE SHOP";

  constructor(private router: Router) {}

  goToProducts() {
    this.router.navigate(["./products/products.routes"]);
  }
}
