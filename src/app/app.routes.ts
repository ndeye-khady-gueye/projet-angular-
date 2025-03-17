import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { PanierComponent } from "./panier/panier.component";

export const APP_ROUTES: Routes = [
  {
    path: "home",
    component: HomeComponent,
  },
  // ici j'ai mis les routes pour aller sur la page conctact
  {
    path: "contact",
    component: ContactComponent,
  },
  {
    path: "panier",
    component: PanierComponent,
  },
  {
    path: "products",
    loadChildren: () =>
      import("./products/products.routes").then((m) => m.PRODUCTS_ROUTES)
  },
  { path: "", redirectTo: "home", pathMatch: "full" },
];
